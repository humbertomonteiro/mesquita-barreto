import styles from "./botaoDiagnostico.module.css";
import { FaWhatsapp } from "react-icons/fa";

// Botão de CTA que abre o WhatsApp com uma mensagem pronta por frente.
// Uso: <BotaoDiagnostico frente="prescricao" />
// Frentes disponíveis: prescricao | holding | isencao | recuperacao

const NUMERO = "5585996135771";

const CONTEUDO = {
  prescricao: {
    tema: "vermelho",
    eyebrow: "Análise gratuita",
    titulo: "Tem uma dívida antiga com o governo? Descubra se ela já prescreveu.",
    desc: "Analisamos o seu processo gratuitamente e respondemos em até 24h se a dívida ainda é válida.",
    botao: "Quero meu diagnóstico gratuito",
    msg: "Olá! Li o artigo sobre prescrição de dívidas no site e quero um diagnóstico gratuito do meu caso.",
  },
  holding: {
    tema: "dourado",
    eyebrow: "Diagnóstico gratuito",
    titulo: "Quer pagar menos imposto e proteger seu patrimônio?",
    desc: "Fazemos um diagnóstico gratuito e mostramos quanto você poderia economizar com uma holding.",
    botao: "Quero meu diagnóstico gratuito",
    msg: "Olá! Li o artigo sobre holding patrimonial no site e quero um diagnóstico gratuito sobre reduzir meus impostos e proteger meu patrimônio.",
  },
  isencao: {
    tema: "vermelho",
    eyebrow: "Análise gratuita e acolhedora",
    titulo: "Você ou um familiar é aposentado e tem uma doença grave?",
    desc: "Verificamos gratuitamente se há direito à isenção do Imposto de Renda e quanto pode ser recuperado.",
    botao: "Verificar meu direito agora",
    msg: "Olá! Li o artigo sobre isenção de Imposto de Renda por doença grave e gostaria de verificar se tenho direito.",
  },
  recuperacao: {
    tema: "vermelho",
    eyebrow: "Diagnóstico tributário gratuito",
    titulo: "Sua empresa pode estar pagando imposto demais.",
    desc: "Fazemos um diagnóstico gratuito e mostramos onde há oportunidade de economizar e recuperar valores.",
    botao: "Quero o diagnóstico gratuito",
    msg: "Olá! Li o artigo sobre impostos no site e quero um diagnóstico gratuito para saber se minha empresa paga imposto demais.",
  },
};

const BotaoDiagnostico = ({ frente = "prescricao" }) => {
  const dados = CONTEUDO[frente] || CONTEUDO.prescricao;
  const link =
    "https://api.whatsapp.com/send?phone=" +
    NUMERO +
    "&text=" +
    encodeURIComponent(dados.msg);

  const classeCard =
    dados.tema === "dourado"
      ? `${styles.card} ${styles.dourado}`
      : styles.card;

  return (
    <a className={classeCard} href={link} target="_blank" rel="noopener noreferrer">
      <span className={styles.eyebrow}>{dados.eyebrow}</span>
      <span className={styles.titulo}>{dados.titulo}</span>
      <span className={styles.desc}>{dados.desc}</span>
      <span className={styles.botao}>
        <FaWhatsapp /> {dados.botao}
      </span>
    </a>
  );
};

export default BotaoDiagnostico;
