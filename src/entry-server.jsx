// Usado SOMENTE no build, para gerar o HTML de cada página (pré-render).
// Não roda no navegador do visitante e não altera o funcionamento do site.
//
// Repete o layout do App.jsx, trocando o BrowserRouter pelo StaticRouter
// (o roteador próprio para gerar páginas no build).
// Se o layout do App.jsx mudar um dia, atualize aqui também.
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import RoutesApp from "./routes/RoutesApp";
import Header from "./components/templates/Header";
import Main from "./components/templates/Main";
import Footer from "./components/templates/Footer";
import ButtonWhatsapp from "./components/shared/ButtonWhatsapp";

export async function render(url) {
  // prerenderToNodeStream espera as páginas carregadas com lazy() ficarem prontas
  const { prelude } = await prerenderToNodeStream(
    <HelmetProvider>
      <StaticRouter location={url}>
        <Header />
        <Main>
          <RoutesApp />
        </Main>
        <Footer />
        <ButtonWhatsapp />
      </StaticRouter>
    </HelmetProvider>,
    // Coloca todo o conteúdo direto no HTML (sem blocos escondidos que
    // dependem de JavaScript), para os robôs de IA lerem a página inteira.
    { progressiveChunkSize: Number.MAX_SAFE_INTEGER }
  );
  let html = "";
  for await (const parte of prelude) html += parte;
  return html;
}
