import { useState } from "react";
import styles from "./calculadoraReforma.module.css";
import { FaWhatsapp } from "react-icons/fa";

// Calculadora da Reforma — componente embutido nos artigos.
// Faz 5 perguntas e gera um diagnóstico com botão de WhatsApp.
// Uso: <CalculadoraReforma />

const NUMERO = "5585996135771";

const PERGUNTAS = [
  {
    q: "Qual o setor principal da sua empresa?",
    opts: ["Comércio (venda de produtos)", "Indústria / produção", "Serviços", "Mais de um setor"],
  },
  {
    q: "Qual o faturamento aproximado por ano?",
    opts: ["Até R$ 360 mil (pequeno)", "R$ 360 mil a R$ 4,8 milhões", "Acima de R$ 4,8 milhões", "Prefiro não informar"],
  },
  {
    q: "Qual o regime tributário atual?",
    opts: ["Simples Nacional", "Lucro Presumido", "Lucro Real", "Não sei / informal"],
  },
  {
    q: "Sua empresa vende principalmente para:",
    opts: ["Outras empresas", "Consumidor final", "Tanto empresas quanto consumidor final", "Não sei dizer"],
  },
  {
    q: "Hoje, sua empresa emite nota fiscal em:",
    opts: ["Todas as vendas", "A maioria das vendas", "Algumas vendas", "Raramente / não emite"],
  },
];

function gerarResultado(answers) {
  const [setor, , regime, publico, nota] = answers;
  const vendeEmpresas = publico === 0 || publico === 2;
  const notaBaixa = nota >= 2;

  if (notaBaixa && vendeEmpresas) {
    return {
      tier: "Atenção: risco alto na transição",
      body: "Sua empresa vende para outras empresas, mas ainda não emite nota em todas as vendas. No novo sistema, isso pode fazer você perder clientes — porque eles deixam de ganhar crédito ao comprar de você.",
      points: [
        "Risco de perder competitividade frente a concorrentes formalizados",
        "Oportunidade de se adequar agora, antes da cobrança cheia",
        "Possível economia ao escolher o regime tributário certo",
      ],
    };
  }
  if (notaBaixa) {
    return {
      tier: "Atenção: hora de se formalizar",
      body: "Sua empresa ainda não emite nota em todas as vendas. A reforma aperta o cerco sobre a informalidade ao longo da transição — e quem se organiza cedo paga menos para se adequar.",
      points: [
        "Risco crescente de autuação durante a transição",
        "Janela para formalizar de forma planejada e econômica",
        "Revisão do regime pode reduzir a carga de imposto",
      ],
    };
  }
  if (regime === 2 || setor === 1) {
    return {
      tier: "Oportunidade: créditos a aproveitar",
      body: "Pelo seu perfil, sua empresa provavelmente terá direito a créditos relevantes no novo sistema (IBS e CBS). O risco aqui é o oposto: deixar crédito na mesa por falta de organização.",
      points: [
        "Potencial de aproveitar créditos que reduzem o imposto",
        "Necessidade de revisar processos e fornecedores",
        "Vantagem competitiva para quem se estruturar primeiro",
      ],
    };
  }
  return {
    tier: "Sua empresa precisa de um plano de transição",
    body: "Pelo seu perfil, a reforma traz mudanças que pedem atenção: novas regras de imposto, créditos e obrigações que mudam ano a ano até 2033. Quem acompanha de perto evita surpresas.",
    points: [
      "Mudanças graduais que exigem acompanhamento contínuo",
      "Possível revisão de regime para pagar menos",
      "Planejamento evita pagar imposto a mais sem perceber",
    ],
  };
}

const CalculadoraReforma = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const total = PERGUNTAS.length;
  const finished = step >= total;

  const escolher = (i) => {
    const novo = [...answers];
    novo[step] = i;
    setAnswers(novo);
  };

  const avancar = () => setStep((s) => s + 1);
  const voltar = () => setStep((s) => Math.max(0, s - 1));
  const refazer = () => {
    setStep(0);
    setAnswers([]);
  };

  const progresso = finished ? 100 : (step / total) * 100;

  let resultado = null;
  let link = "";
  if (finished) {
    resultado = gerarResultado(answers);
    const rotulos = ["Setor", "Faturamento", "Regime", "Vende para", "Emite nota"];
    const respostasTexto = PERGUNTAS.map(
      (p, i) => "\u2022 " + rotulos[i] + ": " + p.opts[answers[i]]
    ).join("\n");
    const msg =
      "Olá! Fiz a calculadora da reforma no site e gostaria de um diagnóstico para minha empresa.\n\n" +
      "Minhas respostas:\n" +
      respostasTexto +
      "\n\nResultado: " +
      resultado.tier;
    link = "https://api.whatsapp.com/send?phone=" + NUMERO + "&text=" + encodeURIComponent(msg);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.kicker}>Ferramenta gratuita</span>
        <h3 className={styles.h3}>Como a reforma tributária afeta a sua empresa?</h3>
        <p className={styles.sub}>
          Responda 5 perguntas rápidas e receba uma estimativa gratuita do impacto — e do que dá para fazer agora.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.progress}>
          <div className={styles.bar} style={{ width: progresso + "%" }} />
        </div>

        {!finished && (
          <div>
            <div className={styles.stepCount}>
              Pergunta {step + 1} de {total}
            </div>
            <div className={styles.question}>{PERGUNTAS[step].q}</div>
            <div className={styles.options}>
              {PERGUNTAS[step].opts.map((o, i) => (
                <button
                  key={i}
                  className={answers[step] === i ? `${styles.opt} ${styles.sel}` : styles.opt}
                  onClick={() => escolher(i)}
                  type="button"
                >
                  {o}
                </button>
              ))}
            </div>
            <div className={styles.nav}>
              {step > 0 ? (
                <button className={styles.btnBack} onClick={voltar} type="button">
                  ← Voltar
                </button>
              ) : (
                <span />
              )}
              <button
                className={styles.btnPrimary}
                onClick={avancar}
                disabled={answers[step] === undefined}
                type="button"
              >
                {step === total - 1 ? "Ver minha análise →" : "Continuar →"}
              </button>
            </div>
          </div>
        )}

        {finished && resultado && (
          <div>
            <div className={styles.stepCount}>Sua análise</div>
            <div className={styles.resultTier}>{resultado.tier}</div>
            <p className={styles.resultBody}>{resultado.body}</p>
            <ul className={styles.points}>
              {resultado.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <p className={styles.resultBody}>
              O próximo passo é um diagnóstico completo — feito por um advogado, com os números reais da sua empresa.
            </p>
            <a className={styles.ctaWa} href={link} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Falar com o escritório no WhatsApp
            </a>
            <button className={styles.btnRestart} onClick={refazer} type="button">
              ↺ Refazer a análise
            </button>
            <p className={styles.disclaimer}>
              Este resultado é uma estimativa de caráter informativo e educativo, gerada a partir das suas respostas.
              Não constitui consulta ou parecer jurídico, nem apuração fiscal, e não substitui a análise
              individualizada de um profissional. Cada caso exige avaliação específica.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculadoraReforma;
