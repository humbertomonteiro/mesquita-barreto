import Title from "../../components/shared/Title";
import SEO from "../../components/shared/SEO";
import styles from "./faq.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { temasFaq } from "../../data/constants/faq";

const WHATSAPP_NUMERO = "5585996135771";
const SITE = "https://www.mesquitabarretoadvocacia.com.br";

// Dados estruturados FAQPage (schema.org): informam ao Google e às IAs cada
// pergunta e resposta desta página. Não aparecem na tela.
const dadosFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE}/perguntas-frequentes`,
  inLanguage: "pt-BR",
  mainEntity: temasFaq.flatMap((tema) =>
    tema.perguntas.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: { "@type": "Answer", text: item.resposta },
    }))
  ),
};

const FAQ = () => {
  return (
    <>
      <SEO
        title="Perguntas Frequentes sobre Direito Tributário | Mesquita Barreto"
        description="Respostas diretas sobre prescrição de dívidas com o governo, holding, isenção de IR por doença grave e recuperação de impostos, com a base legal de cada uma."
        canonical="/perguntas-frequentes"
      />
      <div className={styles.container}>
        <Title text="Perguntas Frequentes" as="h1" />
        <p className={styles.intro}>
          Respostas diretas às dúvidas mais comuns que recebemos, com a base
          legal de cada uma. Conteúdo revisado em 4 de novembro de 2026 pelo
          Dr. Rafael Ewerton Mesquita Barreto, advogado especialista em Direito
          Tributário (OAB/CE 32.555).
        </p>

        {temasFaq.map((tema) => (
          <section key={tema.id} className={styles.tema}>
            <h2>{tema.tema}</h2>
            {tema.perguntas.map((item) => (
              <div key={item.pergunta} className={styles.item}>
                <h3>{item.pergunta}</h3>
                <p>{item.resposta}</p>
              </div>
            ))}
            <a
              className={styles.whatsappBtn}
              href={
                "https://api.whatsapp.com/send?phone=" +
                WHATSAPP_NUMERO +
                "&text=" +
                encodeURIComponent(tema.whatsapp)
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> {tema.botao}
            </a>
          </section>
        ))}

        <p className={styles.aviso}>
          As respostas têm caráter informativo e não substituem a análise do
          seu caso concreto.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosFaq) }}
      />
    </>
  );
};

export default FAQ;
