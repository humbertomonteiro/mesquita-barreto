// Artigos do blog — Mesquita Barreto Advocacia
// Conteúdo real (SEO jurídico). Cada artigo possui: id, slug, title,
// description e content. Os subtítulos usam <h3> e o corpo usa <p>/<ul>,
// seguindo o padrão original do site.
//
// >>> ALTERAÇÃO: o antigo CTA em texto (<p><strong>➜ ...</strong></p>) foi
// substituído pelo componente <BotaoDiagnostico />, que abre o WhatsApp com
// a mensagem certa de cada frente. Import adicionado na primeira linha.

import BotaoDiagnostico from "../../components/shared/BotaoDiagnostico";
import CalculadoraReforma from "../../components/shared/CalculadoraReforma";

const Article1 = () => {
  return (
    <div>
      <h2>Dívida com o governo prescreve? Entenda quando você não precisa mais pagar</h2>
      <p>
        Muitos empresários convivem por anos com uma dívida tributária pendurada
        no nome — e raramente fazem a pergunta mais importante: essa dívida ainda
        é válida? A resposta pode surpreender. Sim, dívida com o governo
        prescreve, e quando isso acontece, você deixa de ter a obrigação de
        pagar. Neste artigo, explicamos de forma simples como funciona.
      </p>
      <h3>O que significa uma dívida prescrever</h3>
      <p>
        Prescrever quer dizer perder a validade pelo tempo. O governo tem um
        prazo para cobrar uma dívida tributária. Quando esse prazo passa sem que
        ele tome as medidas corretas de cobrança, perde o direito de exigir o
        pagamento. É o mesmo princípio de um prazo de validade: depois da data,
        não vale mais.
      </p>
      <h3>Em quanto tempo a dívida com o governo prescreve</h3>
      <p>
        O prazo geral é de cinco anos. Mas existe um detalhe que confunde muita
        gente: esse prazo pode acontecer em dois momentos diferentes. Antes do
        processo, se o governo demora demais para cobrar na Justiça. E durante o
        processo — a chamada prescrição intercorrente — quando a ação de cobrança
        fica parada por anos sem nenhum ato efetivo.
      </p>
      <h3>A regra prática: 1 + 5 anos</h3>
      <p>
        Na prescrição que acontece durante o processo, a conta segue uma lógica
        clara. Quando o governo não encontra o devedor ou bens para cobrar, o
        processo fica suspenso por um ano. Terminado esse ano, começa a correr o
        prazo de cinco anos. Se nesse período não houver cobrança real, a dívida
        prescreve.
      </p>
      <h3>O que conta como cobrança (e o que não conta)</h3>
      <p>
        Aqui está o ponto que mais gera dúvida. Nem toda movimentação no processo
        reinicia o prazo. Pedidos que não encontraram nada, petições sem
        resultado e movimentações de rotina não interrompem a contagem. O que
        realmente conta são atos efetivos:
      </p>
      <ul>
        <li>Uma citação válida, em que você foi formalmente notificado.</li>
        <li>Uma penhora ou bloqueio de bens que efetivamente aconteceu.</li>
        <li>Um parcelamento que você assinou, reconhecendo a dívida.</li>
      </ul>
      <p>
        Por isso um processo pode estar cheio de páginas e movimentações e, ainda
        assim, estar prescrito. O que importa é a substância, não a quantidade.
      </p>
      <h3>Como saber se a minha dívida já prescreveu</h3>
      <p>
        O sinal mais comum é um processo de execução fiscal parado há mais de
        cinco anos sem nenhum bloqueio ou penhora que tenha dado certo. Mas só a
        análise do histórico real do processo confirma com segurança. Cada caso
        tem suas particularidades, e detalhes nas datas fazem toda a diferença.
      </p>
      <BotaoDiagnostico frente="prescricao" />
    </div>
  );
};

const Article2 = () => {
  return (
    <div>
      <h2>Sou sócio de empresa com dívida fiscal: posso ser cobrado pessoalmente?</h2>
      <p>
        Descobrir que o seu nome — e o seu patrimônio pessoal — foi incluído numa
        dívida que era da empresa é uma das situações mais angustiantes para
        qualquer empresário. A boa notícia é que isso tem regras e prazos. Nem
        sempre o sócio pode ser cobrado, e quando pode, há um limite de tempo.
        Vamos explicar.
      </p>
      <h3>A empresa e o sócio são coisas diferentes</h3>
      <p>
        Como regra, a dívida é da empresa, não do sócio. O patrimônio pessoal de
        quem é sócio fica separado do patrimônio da empresa. Por isso, em
        situações normais, o governo cobra a empresa — e não pode simplesmente
        avançar sobre os bens pessoais dos donos.
      </p>
      <h3>Quando o sócio pode ser responsabilizado</h3>
      <p>
        Existem exceções. O sócio pode ser chamado a responder pessoalmente em
        casos específicos, como quando há indício de fraude, encerramento
        irregular da empresa (fechar as portas sem dar baixa corretamente) ou
        atos praticados com excesso de poder. Mesmo nessas situações, há
        condições que precisam ser comprovadas — não é automático.
      </p>
      <h3>O prazo de 5 anos para incluir o sócio</h3>
      <p>
        Este é o ponto-chave. Mesmo quando o sócio pode ser responsabilizado, o
        governo tem um prazo para fazer isso: cinco anos. Se a inclusão do sócio
        no processo acontece fora desse prazo, ela pode ser anulada. Em muitos
        casos, quando o nome do sócio é incluído tardiamente, essa
        responsabilização já estava prescrita no momento em que foi feita.
      </p>
      <h3>O que isso significa na prática</h3>
      <p>
        Se você foi incluído pessoalmente numa execução fiscal muito tempo depois
        de a empresa ter sido cobrada, vale verificar com urgência. É possível
        que o prazo já tenha se esgotado e que o seu nome possa ser retirado do
        processo, protegendo o seu patrimônio pessoal.
      </p>
      <BotaoDiagnostico frente="prescricao" />
    </div>
  );
};

const Article3 = () => {
  return (
    <div>
      <h2>Como pagar menos imposto sobre aluguéis: pessoa física x holding</h2>
      <p>
        Quem recebe aluguéis no nome próprio costuma pagar imposto pelas regras
        mais caras que existem. O que pouca gente sabe é que há uma forma legal
        de reduzir bastante essa conta: a holding patrimonial. Neste artigo,
        explicamos a diferença em números simples e quando essa estrutura faz
        sentido.
      </p>
      <h3>Quanto custa receber aluguel como pessoa física</h3>
      <p>
        Quando o aluguel cai na sua conta como pessoa física, ele entra na tabela
        do Imposto de Renda. Nas faixas mais altas, a alíquota chega a 27,5%. Ou
        seja, mais de um quarto do que você recebe de aluguel pode ir para o
        imposto.
      </p>
      <h3>Como funciona dentro de uma holding</h3>
      <p>
        Holding é uma empresa criada para ser a dona do seu patrimônio. Quando os
        imóveis pertencem a essa empresa, o aluguel é tributado pelas regras de
        pessoa jurídica. No regime do Lucro Presumido, a carga efetiva costuma
        ficar em torno de 11,33%, somando os tributos aplicáveis. A diferença
        para os 27,5% da pessoa física é expressiva.
      </p>
      <h3>Um exemplo em números</h3>
      <p>
        Imagine alguém que recebe 45 mil reais por mês em aluguéis. Como pessoa
        física, o imposto pode passar de 12 mil reais mensais. Dentro de uma
        holding bem estruturada, essa carga cai significativamente — uma economia
        que, ao longo dos meses e anos, se torna muito relevante. Há ainda a
        vantagem de que o lucro distribuído ao sócio é, hoje, isento de Imposto
        de Renda.
      </p>
      <h3>Atenção: nem tudo é vantagem automática</h3>
      <p>
        É importante ser honesto: a holding não é vantagem em toda situação. Para
        imóveis destinados à renda de aluguel no longo prazo, ela costuma valer
        muito a pena. Já para um imóvel que você pretende vender em breve, às
        vezes a pessoa física tem isenções que compensam mais. Por isso a
        estrutura precisa ser desenhada para o seu objetivo específico.
      </p>
      <CalculadoraReforma />
      <BotaoDiagnostico frente="holding" />
    </div>
  );
};

const Article4 = () => {
  return (
    <div>
      <h2>Inventário pode consumir até 30% do patrimônio: como proteger sua família</h2>
      <p>
        Ninguém gosta de pensar nisso, mas a forma como o patrimônio é
        transmitido aos herdeiros faz uma enorme diferença no bolso da família.
        Sem planejamento, o caminho é o inventário — um processo que pode ser
        longo, caro e desgastante. Existe uma alternativa que muitas famílias
        desconhecem.
      </p>
      <h3>Por que o inventário pesa tanto</h3>
      <p>
        Quando alguém falece sem um planejamento, a transmissão dos bens passa
        pelo inventário. Entre impostos, custas e honorários, esse processo pode
        consumir até 30% do valor do patrimônio. E não é só dinheiro: o
        inventário pode levar anos, e durante esse tempo a família muitas vezes
        não consegue dispor livremente dos bens.
      </p>
      <p>
        Não é raro que famílias precisem vender bens às pressas, por valores
        abaixo do mercado, apenas para arcar com os custos do próprio inventário.
        O patrimônio que levou uma vida para ser construído acaba encolhendo no
        pior momento possível.
      </p>
      <h3>Como a holding familiar muda esse cenário</h3>
      <p>
        A holding familiar permite organizar a sucessão ainda em vida. Em vez de
        deixar que os bens passem por inventário, você os coloca dentro de uma
        empresa e transfere as quotas dessa empresa aos herdeiros de forma
        planejada. Veja as principais vantagens:
      </p>
      <ul>
        <li>
          Você pode manter o controle e a renda dos bens enquanto viver, por meio
          do usufruto.
        </li>
        <li>
          A transmissão aos herdeiros acontece sem a necessidade de inventário
          sobre esses bens.
        </li>
        <li>
          Os custos costumam ser muito menores do que os de um inventário
          tradicional.
        </li>
        <li>
          É possível incluir regras que evitam conflitos entre os herdeiros no
          futuro.
        </li>
      </ul>
      <h3>Planejar é um ato de cuidado</h3>
      <p>
        Mais do que economia, o planejamento sucessório é uma forma de proteger
        quem você ama de um processo desgastante num momento já difícil.
        Organizar isso em vida é deixar tudo claro e resolvido, evitando que a
        família precise lidar com burocracia e custos altos durante o luto.
      </p>
      <BotaoDiagnostico frente="holding" />
    </div>
  );
};

const Article5 = () => {
  return (
    <div>
      <h2>Aposentado com doença grave não paga Imposto de Renda: veja se você tem direito</h2>
      <p>
        Milhares de aposentados e pensionistas no Brasil têm Imposto de Renda
        descontado do benefício todos os meses sem saber que poderiam estar
        isentos. Uma lei em vigor desde 1988 garante esse direito a quem tem
        certas doenças graves. Se este pode ser o seu caso ou o de um familiar,
        vale entender como funciona.
      </p>
      <h3>O que diz a lei</h3>
      <p>
        A legislação determina que aposentados, pensionistas e reformados
        portadores de determinadas doenças graves ficam isentos do Imposto de
        Renda sobre os proventos de aposentadoria, pensão ou reforma. É um
        benefício de natureza humanitária, criado em reconhecimento às despesas e
        dificuldades que essas doenças trazem.
      </p>
      <h3>Quais doenças dão direito à isenção</h3>
      <p>A lei lista diversas doenças graves. Entre as mais comuns estão:</p>
      <ul>
        <li>Câncer (neoplasia maligna), de qualquer tipo.</li>
        <li>Cardiopatia grave e doença de Parkinson.</li>
        <li>
          Cegueira (inclusive em apenas um dos olhos), esclerose múltipla e
          nefropatia grave.
        </li>
        <li>AIDS, hepatopatia grave, paralisia irreversível, entre outras.</li>
      </ul>
      <h3>Importante: você não precisa estar doente no momento</h3>
      <p>
        Este é o ponto que mais faz gente deixar de pedir o que é seu. Muita
        gente acredita que, por estar curada, perdeu o direito. Não é verdade. O
        Superior Tribunal de Justiça já decidiu que o direito à isenção permanece
        mesmo depois da cura ou com a doença controlada. Basta ter o diagnóstico
        comprovado por laudo. Não é preciso estar em tratamento nem incapacitado.
      </p>
      <h3>O dinheiro que pode voltar</h3>
      <p>
        Além de parar de pagar o imposto daqui para frente, é possível reaver o
        que foi descontado indevidamente nos últimos cinco anos, com correção
        pela taxa Selic. Para quem foi diagnosticado há algum tempo, esse valor
        retroativo pode ser bastante significativo. E vale lembrar: o direito
        vale também para os herdeiros, quando o titular faleceu sem ter pedido a
        isenção.
      </p>
      <BotaoDiagnostico frente="isencao" />
    </div>
  );
};

const Article6 = () => {
  return (
    <div>
      <h2>5 sinais de que sua empresa pode estar pagando imposto demais</h2>
      <p>
        No Brasil, é comum que empresas paguem mais tributos do que realmente
        deveriam — seja por falta de planejamento, por erros na apuração ou por
        desconhecer créditos a que têm direito. A boa notícia é que parte desses
        valores pode ser recuperada. Veja cinco sinais de que vale a pena fazer
        uma revisão.
      </p>
      <h3>1. Você nunca fez uma revisão tributária</h3>
      <p>
        Se a sua empresa nunca passou por uma análise especializada da carga
        tributária, há grande chance de existirem oportunidades não aproveitadas.
        Muitas empresas seguem pagando da mesma forma há anos, sem questionar se
        há um caminho mais eficiente e legal.
      </p>
      <h3>2. O regime tributário nunca foi reavaliado</h3>
      <p>
        Simples Nacional, Lucro Presumido, Lucro Real — a escolha do regime certo
        faz enorme diferença no quanto você paga. Conforme a empresa cresce e
        muda, o regime ideal também pode mudar. Continuar no mesmo enquadramento
        por inércia pode significar pagar a mais.
      </p>
      <h3>3. Você desconhece os créditos a que tem direito</h3>
      <p>
        Dependendo da atividade, a empresa pode ter direito a créditos de
        tributos como PIS e COFINS que não estão sendo aproveitados. Esses
        créditos podem reduzir o valor a pagar ou até gerar valores a recuperar
        dos últimos cinco anos.
      </p>
      <h3>4. Sua empresa cresceu, mas a gestão tributária não acompanhou</h3>
      <p>
        Empresas que crescem rápido muitas vezes mantêm uma estrutura tributária
        pensada para um porte menor. Esse descompasso costuma resultar em
        ineficiência e pagamento excessivo de tributos.
      </p>
      <h3>5. Você sente que paga muito, mas não sabe explicar por quê</h3>
      <p>
        Essa sensação, muito comum entre empresários, geralmente é um indício
        real. Quando a conta dos impostos parece alta demais e não há clareza
        sobre o porquê, é sinal de que uma análise técnica pode revelar
        oportunidades de economia.
      </p>
      <h3>O que fazer a respeito</h3>
      <p>
        O caminho é uma revisão tributária feita por especialista, que analisa a
        situação da empresa, identifica o que está sendo pago a mais e aponta o
        que pode ser recuperado dos últimos cinco anos — sempre dentro da lei.
        Muitas vezes, a economia gerada supera com folga o custo da análise.
      </p>
      <CalculadoraReforma />
      <BotaoDiagnostico frente="recuperacao" />
    </div>
  );
};

export const articles = [
  {
    id: 1,
    slug: "divida-com-governo-prescreve",
    content: <Article1 />,
    title: "Dívida com o governo prescreve? Entenda quando você não precisa mais pagar",
    description:
      "Saiba o que é a prescrição de dívidas tributárias, em quanto tempo uma dívida com o governo perde a validade e como identificar se a sua já prescreveu.",
  },
  {
    id: 2,
    slug: "socio-responde-divida-empresa",
    content: <Article2 />,
    title: "Sou sócio de empresa com dívida fiscal: posso ser cobrado pessoalmente?",
    description:
      "Entenda quando o sócio responde por dívidas tributárias da empresa, qual o prazo para isso e como a prescrição pode tirar seu nome da execução fiscal.",
  },
  {
    id: 3,
    slug: "pagar-menos-imposto-aluguel-holding",
    content: <Article3 />,
    title: "Como pagar menos imposto sobre aluguéis: pessoa física x holding",
    description:
      "Descubra como o imposto sobre aluguéis pode cair de 27,5% para cerca de 11,33% com uma holding patrimonial e quando essa estrutura vale a pena.",
  },
  {
    id: 4,
    slug: "evitar-inventario-caro-holding",
    content: <Article4 />,
    title: "Inventário pode consumir até 30% do patrimônio: como proteger sua família",
    description:
      "Entenda por que o inventário é caro e demorado e como o planejamento sucessório com holding pode reduzir custos e evitar conflitos entre herdeiros.",
  },
  {
    id: 5,
    slug: "isencao-imposto-renda-doenca-grave",
    content: <Article5 />,
    title: "Aposentado com doença grave não paga Imposto de Renda: veja se você tem direito",
    description:
      "Aposentados e pensionistas com doença grave têm direito à isenção do Imposto de Renda e podem reaver até 5 anos de valores pagos. Entenda como funciona.",
  },
  {
    id: 6,
    slug: "empresa-paga-imposto-demais",
    content: <Article6 />,
    title: "5 sinais de que sua empresa pode estar pagando imposto demais",
    description:
      "Conheça cinco sinais de que sua empresa pode estar pagando mais tributos do que deveria e descubra como uma revisão tributária pode recuperar valores.",
  },
];
