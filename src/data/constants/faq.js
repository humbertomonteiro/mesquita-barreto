// Perguntas frequentes — Mesquita Barreto Advocacia
// Respostas curtas, no formato em que as pessoas perguntam ao Google e às IAs,
// sempre com a base legal. Revisado em 04/11/2026.
// Para incluir uma pergunta, adicione um objeto { pergunta, resposta } no tema.

export const temasFaq = [
  {
    id: "prescricao",
    tema: "Prescrição e dívidas com o governo",
    whatsapp:
      "Olá! Vi as perguntas frequentes sobre prescrição de dívidas no site e quero um diagnóstico gratuito do meu caso.",
    botao: "Quero meu diagnóstico gratuito",
    perguntas: [
      {
        pergunta: "Dívida com o governo prescreve em quantos anos?",
        resposta:
          "Em 5 anos. O governo tem 5 anos, contados da constituição definitiva do crédito, para cobrar a dívida tributária na Justiça (artigo 174 do Código Tributário Nacional). Se a execução fiscal já existe, mas fica parada porque o devedor ou bens não foram encontrados, a dívida prescreve depois de 1 ano de suspensão mais 5 anos (artigo 40 da Lei 6.830/1980 e Súmula 314 do STJ).",
      },
      {
        pergunta: "O que é prescrição intercorrente?",
        resposta:
          "É a prescrição que acontece durante a execução fiscal, quando o processo fica parado. Se o governo não encontra o devedor ou bens, o processo é suspenso por 1 ano e, depois disso, correm 5 anos. Segundo o STJ, só interrompem esse prazo a citação efetiva e a penhora ou bloqueio de bens que deu resultado. Pedidos sem resultado não bastam (REsp 1.340.553/RS, Temas 566 a 571).",
      },
      {
        pergunta: "O que acontece quando a dívida tributária prescreve?",
        resposta:
          "O crédito tributário deixa de existir e o governo não pode mais cobrá-lo (artigo 156, V, do CTN). Na execução fiscal, a prescrição pode ser reconhecida pelo juiz e pode ser pedida pelo devedor por meio de exceção de pré-executividade, quando não depende de produção de provas (Súmula 393 do STJ).",
      },
      {
        pergunta: "Parcelar a dívida interrompe a prescrição?",
        resposta:
          "Sim. Parcelar é reconhecer a dívida, e isso interrompe o prazo de prescrição (artigo 174, parágrafo único, IV, do CTN). Por isso, antes de assinar um parcelamento de dívida antiga, vale verificar se ela já prescreveu.",
      },
      {
        pergunta: "O sócio responde pela dívida tributária da empresa?",
        resposta:
          "Em regra, não. O simples fato de a empresa não ter pago o tributo não torna o sócio responsável (Súmula 430 do STJ). O sócio-administrador pode responder em casos como fechamento irregular da empresa, fraude ou atos com excesso de poderes (artigo 135, III, do CTN e Súmula 435 do STJ). Mesmo assim, o governo tem 5 anos para incluí-lo no processo (Tema 444 do STJ).",
      },
    ],
  },
  {
    id: "holding",
    tema: "Holding e planejamento sucessório",
    whatsapp:
      "Olá! Vi as perguntas frequentes sobre holding no site e quero um diagnóstico gratuito sobre reduzir meus impostos e proteger meu patrimônio.",
    botao: "Quero meu diagnóstico gratuito",
    perguntas: [
      {
        pergunta: "O que é uma holding patrimonial?",
        resposta:
          "É uma empresa criada para ser a dona dos bens de uma pessoa ou família, como imóveis e participações em outras empresas. Com os bens dentro dela, a renda passa a ser tributada como pessoa jurídica e a sucessão pode ser organizada ainda em vida.",
      },
      {
        pergunta: "Holding vale a pena para quem recebe aluguel?",
        resposta:
          "Costuma valer quando a renda de aluguel é alta e os imóveis são para renda de longo prazo. Na pessoa física, o aluguel paga até 27,5% de Imposto de Renda; numa holding no Lucro Presumido, a carga fica em torno de 11,33% (IRPJ, CSLL, PIS e Cofins). Os lucros distribuídos seguem sem retenção até R$ 50 mil por mês, pagos por uma mesma empresa a um mesmo sócio, e rendas acima de R$ 600 mil por ano entram no IR mínimo (Lei 15.270/2025). A conta deve ser feita caso a caso, e a reforma tributária muda o cálculo a partir de 2027.",
      },
      {
        pergunta: "Holding evita inventário?",
        resposta:
          "Se as quotas da holding forem doadas aos herdeiros ainda em vida, os bens que estão nela não passam por inventário. Normalmente o dono reserva o usufruto das quotas, o que garante o controle e a renda enquanto viver (artigo 1.394 do Código Civil). O ITCMD continua sendo devido, mas é pago na doação, de forma planejada.",
      },
      {
        pergunta: "Quanto é o ITCMD no Ceará?",
        resposta:
          "De 2% a 8%, aplicados por faixas de valor, tanto na herança quanto na doação (Lei estadual 15.812/2015). As faixas da doação são diferentes das da herança, por isso a simulação deve comparar os dois cenários. Desde a reforma tributária, o ITCMD progressivo é obrigatório em todo o país (Emenda Constitucional 132/2023).",
      },
      {
        pergunta: "Holding protege o patrimônio de dívidas?",
        resposta:
          "Protege quando é feita antes de existirem dívidas e funciona de forma regular, com contabilidade própria e sem misturar o patrimônio dos sócios com o da empresa. Transferir bens para fugir de credores pode ser anulado como fraude (artigo 158 do Código Civil e artigo 792 do Código de Processo Civil), e a Justiça pode desconsiderar a empresa em caso de abuso ou confusão patrimonial (artigo 50 do Código Civil).",
      },
    ],
  },
  {
    id: "isencao",
    tema: "Isenção de Imposto de Renda por doença grave",
    whatsapp:
      "Olá! Vi as perguntas frequentes sobre isenção de Imposto de Renda no site e gostaria de verificar se tenho direito.",
    botao: "Verificar meu direito agora",
    perguntas: [
      {
        pergunta: "Quem tem direito à isenção de Imposto de Renda por doença grave?",
        resposta:
          "Aposentados, pensionistas e militares reformados que têm uma das doenças graves listadas na lei. A isenção vale sobre a aposentadoria, a pensão ou a reforma, mesmo que a doença tenha surgido depois da aposentadoria (artigo 6º, XIV, da Lei 7.713/1988). A isenção não é automática: é preciso pedir.",
      },
      {
        pergunta: "Quais doenças dão direito à isenção de Imposto de Renda?",
        resposta:
          "Moléstia profissional, tuberculose ativa, alienação mental, esclerose múltipla, neoplasia maligna (câncer), cegueira, hanseníase, paralisia irreversível e incapacitante, cardiopatia grave, doença de Parkinson, espondiloartrose anquilosante, nefropatia grave, hepatopatia grave, estados avançados da doença de Paget, contaminação por radiação, AIDS e fibrose cística (artigo 6º, XIV, da Lei 7.713/1988). O STJ entende que essa lista é fechada (Tema 250).",
      },
      {
        pergunta: "Quem já se curou do câncer ainda tem direito à isenção?",
        resposta:
          "Sim. O STJ firmou que a isenção deve ser concedida ou mantida sem exigir que os sintomas sejam atuais nem que a doença tenha voltado (Súmula 627 do STJ). Não é preciso estar em tratamento nem incapacitado.",
      },
      {
        pergunta: "Dá para receber de volta o Imposto de Renda já descontado?",
        resposta:
          "Sim. É possível pedir de volta o imposto descontado indevidamente nos últimos 5 anos (artigo 168 do CTN), com correção pela taxa Selic (artigo 39, parágrafo 4º, da Lei 9.250/1995). O direito também vale para os herdeiros, quando o titular faleceu sem ter pedido a isenção.",
      },
      {
        pergunta: "Quem ainda trabalha tem direito à isenção?",
        resposta:
          "Não sobre o salário. A isenção vale apenas para aposentadoria, pensão ou reforma, e não para os rendimentos de quem continua trabalhando (Tema 1037 do STJ). Quem é aposentado e também trabalha tem isenção sobre a aposentadoria, mas continua pagando imposto sobre o salário.",
      },
      {
        pergunta: "Precisa de laudo médico oficial para pedir a isenção?",
        resposta:
          "No pedido feito ao INSS ou ao órgão que paga o benefício, a lei exige laudo de serviço médico oficial (artigo 30 da Lei 9.250/1995). Na Justiça, o juiz pode reconhecer a doença por outros documentos médicos, sem laudo oficial (Súmula 598 do STJ).",
      },
    ],
  },
  {
    id: "recuperacao",
    tema: "Recuperação de impostos para empresas",
    whatsapp:
      "Olá! Vi as perguntas frequentes sobre recuperação de impostos no site e quero um diagnóstico gratuito da minha empresa.",
    botao: "Quero o diagnóstico gratuito",
    perguntas: [
      {
        pergunta: "Minha empresa pode recuperar imposto pago a mais?",
        resposta:
          "Sim. A lei permite recuperar o que foi pago indevidamente nos últimos 5 anos (artigos 165 e 168 do CTN), por restituição em dinheiro ou por compensação com outros tributos federais (artigo 74 da Lei 9.430/1996).",
      },
      {
        pergunta: "Como saber se minha empresa paga imposto demais?",
        resposta:
          "Os sinais mais comuns são nunca ter feito uma revisão tributária, nunca ter reavaliado o regime (Simples Nacional, Lucro Presumido ou Lucro Real), não aproveitar créditos de PIS e Cofins e ter crescido sem ajustar a gestão tributária. No Lucro Real, PIS e Cofins permitem descontar créditos sobre diversos custos e despesas (Leis 10.637/2002 e 10.833/2003). Uma revisão feita por especialista confirma se há valores a recuperar.",
      },
      {
        pergunta: "A reforma tributária muda a recuperação de impostos?",
        resposta:
          "A partir de 2027, PIS e Cofins deixam de existir e dão lugar à CBS, e o IBS substitui gradualmente o ICMS e o ISS até 2033 (Emenda Constitucional 132/2023). A reforma não apaga o direito de recuperar valores pagos indevidamente nos últimos 5 anos, mas torna mais urgente fazer a revisão enquanto os tributos antigos ainda estão em vigor.",
      },
    ],
  },
  {
    id: "escritorio",
    tema: "Sobre o escritório",
    whatsapp:
      "Olá! Vi as perguntas frequentes no site e gostaria de falar com o escritório.",
    botao: "Falar com o escritório",
    perguntas: [
      {
        pergunta: "Onde fica o escritório Mesquita Barreto Advocacia?",
        resposta:
          "Na Av. Dom Luís, 1200, sala 1902, Aldeota, Fortaleza (CE). O escritório atua em todo o Brasil, e o primeiro contato e o envio de documentos podem ser feitos pelo WhatsApp.",
      },
      {
        pergunta: "Quem é o advogado responsável?",
        resposta:
          "Dr. Rafael Ewerton Mesquita Barreto, OAB/CE 32.555, especialista em Direito Tributário, com mais de 10 anos de atuação.",
      },
      {
        pergunta: "Como funciona o diagnóstico gratuito?",
        resposta:
          "Você entra em contato pelo WhatsApp, conta a sua situação e envia os documentos que tiver, como o número do processo, a certidão de dívida ativa, o informe de rendimentos ou o laudo médico. A equipe analisa e responde com a avaliação do caso e os próximos passos, sem custo.",
      },
    ],
  },
];
