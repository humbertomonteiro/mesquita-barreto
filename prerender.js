// Pré-render: depois do build, gera um HTML com o conteúdo real de cada
// página listada no public/sitemap.xml, para Google e IAs lerem sem JavaScript.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const raiz = process.cwd();
const dist = path.join(raiz, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");
let render;
try {
  ({ render } = await import(
    pathToFileURL(path.join(raiz, "dist-server", "entry-server.js")).href
  ));
} catch (erro) {
  // Se algo do site não puder rodar fora do navegador, o build NÃO falha:
  // o site é publicado exatamente como antes (sem pré-render).
  console.warn("⚠ Pré-render desativado neste build:", erro.message);
  process.exit(0);
}

// Lê as páginas do sitemap (fonte única: artigo novo no sitemap = página gerada)
const sitemap = fs.readFileSync(path.join(raiz, "public", "sitemap.xml"), "utf-8");
const rotasSitemap = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (m) => new URL(m[1].trim()).pathname
);
// Páginas fixas do site que não estão no sitemap
const EXTRAS = ["/work-us", "/be-partner"];
const rotas = [...new Set([...rotasSitemap, ...EXTRAS])];

// Tags de <head> que o React 19 coloca dentro do HTML renderizado
const TAGS_HEAD =
  /<title[^>]*>[\s\S]*?<\/title>|<meta\s[^>]*(?:name|property)="(?:description|og:[^"]*|twitter:[^"]*)"[^>]*\/?>|<link\s[^>]*rel="canonical"[^>]*\/?>/g;

let ok = 0;
for (const rota of rotas) {
  try {
    let corpo = await render(rota);
    const tagsHead = corpo.match(TAGS_HEAD) || [];
    corpo = corpo.replace(TAGS_HEAD, "");
    // Remove scripts internos do React ($R...), desnecessários aqui.
    // Scripts com atributos (ex.: dados estruturados JSON-LD) são mantidos.
    corpo = corpo.replace(/<script>(?:(?!<\/script>)[\s\S])*?\$R[\s\S]*?<\/script>/g, "");

    let html = template;
    if (tagsHead.length) {
      // Remove do template as tags que a página redefine, para não duplicar
      if (tagsHead.some((t) => t.startsWith("<title")))
        html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/, "");
      if (tagsHead.some((t) => /name="description"/.test(t)))
        html = html.replace(/<meta\s[^>]*name="description"[^>]*>/, "");
      if (tagsHead.some((t) => /rel="canonical"/.test(t)))
        html = html.replace(/<link\s[^>]*rel="canonical"[^>]*>/, "");
      // Marca as tags do pré-render e as remove assim que o navegador abre a
      // página: robôs sem JavaScript leem as tags; no navegador, o React
      // recoloca as dele (evita título/descrição duplicados).
      const marcadas = tagsHead.map((t) => t.replace(/^<(\w+)/, "<$1 data-pre"));
      const limpeza =
        "<script>document.querySelectorAll('[data-pre]').forEach(function(e){e.remove()})</script>";
      html = html.replace("</head>", marcadas.join("") + limpeza + "</head>");
    }
    const DIV_ROOT = /<div id="root">\s*<\/div>/;
    if (!DIV_ROOT.test(html)) throw new Error('<div id="root"></div> não encontrado no index.html');
    html = html.replace(DIV_ROOT, () => `<div id="root">${corpo}</div>`);

    const destino =
      rota === "/"
        ? path.join(dist, "index.html")
        : path.join(dist, rota.replace(/^\/|\/$/g, ""), "index.html");
    fs.mkdirSync(path.dirname(destino), { recursive: true });
    fs.writeFileSync(destino, html);
    ok++;
    console.log("  ✓ pré-render:", rota);
  } catch (erro) {
    // Uma página com problema não derruba o build: ela segue como antes (SPA)
    console.warn("  ⚠ pré-render ignorado em", rota, "→", erro.message);
  }
}
console.log(`Pré-render concluído: ${ok}/${rotas.length} páginas.`);
