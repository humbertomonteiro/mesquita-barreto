// Artigos do blog — Mesquita Barreto Advocacia
// Formato GEO: cada artigo responde à pergunta no primeiro parágrafo,
// cita o fundamento legal, mostra o autor e traz dados estruturados
// (JSON-LD) para buscadores e IAs.
// Revisão de 04/11/2026: fundamentos conferidos na legislação e na
// jurisprudência vigentes nesta data.

import BotaoDiagnostico from "../../components/shared/BotaoDiagnostico";

const SITE = "https://www.mesquitabarretoadvocacia.com.br";
const ATUALIZADO = "2026-11-04";
const ATUALIZADO_TEXTO = "4 de novembro de 2026";

// Linha de autoria exibida logo abaixo do título de cada artigo
const Autoria = () => (
  <p style={{ fontSize: "0.9rem", opacity: 0.75 }}>
    Por <strong>Dr. Rafael Ewerton Mesquita Barreto</strong>, advogado
    especialista em Direito Tributário (OAB/CE 32.555). Atualizado em{" "}
    {ATUALIZADO_TEXTO}.
  </p>
);

// Dados estruturados (schema.org) que identificam o artigo, o autor e o
// escritório para o Google e as IAs. Não aparecem na tela.
const DadosEstruturados = ({ slug }) => {
  const artigo = articles.find((a) => a.slug === slug);
  if (!artigo) return null;
  const dados = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: artigo.title,
    description: artigo.description,
    inLanguage: "pt-BR",
    dateModified: ATUALIZADO,
    mainEntityOfPage: `${SITE}/articles/${artigo.slug}`,
    author: {
      "@type": "Person",
      name: "Rafael Ewerton Mesquita Barreto",
      jobTitle: "Advogado especialista em Direito Tributário",
      identifier: "OAB/CE 32.555",
      worksFor: {
        "@type": "LegalService",
        name: "Mesquita Barreto Advocacia",
        url: SITE,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Mesquita Barreto Advocacia",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/logo.jpg` },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }}
    />
  );
};

const Article1 = () => {
  return (
    <div>
      <h2>Dívida com o governo prescreve? Entenda quando você não precisa mais pagar</h2>
      <Autoria />
      <p>
        Sim. A dívida tributária com o governo prescreve em 5 anos e, quando
        isso acontece, o crédito deixa de existir e não pode mais ser cobrado
        (artigos 156, V, e 174 do Código Tributário Nacional). A prescrição
        pode acontecer antes de o governo entrar na Justiça ou durante a
        execução fiscal, quando o processo fica parado por 1 ano mais 5 anos
        sem que o governo encontre o devedor ou bens (artigo 40 da Lei
        6.830/1980 e Súmula 314 do STJ).
      </p>
      <h3>O que significa uma dívida prescrever</h3>
      <p>
        Prescrever quer dizer perder a validade pelo tempo. O governo tem um
        prazo para cobrar uma dívida tributária. Quando esse prazo passa sem
        que ele tome as medidas corretas de cobrança, perde o direito de exigir
        o pagamento. É o mesmo princípio de um prazo de validade: depois da
        data, não vale mais.
      </p>
      <h3>Os dois momentos em que a dívida pode prescrever</h3>
      <ul>
        <li>
          <strong>Antes do processo:</strong> o governo tem 5 anos, contados
          da constituição definitiva do crédito, para cobrar na Justiça. O
          prazo é interrompido quando o juiz manda citar o devedor (artigo 174,
          parágrafo único, I, do CTN).
        </li>
        <li>
          <strong>Durante o processo (prescrição intercorrente):</strong> a
          execução fiscal já existe, mas fica parada por anos sem nenhum ato
          efetivo de cobrança.
        </li>
      </ul>
      <h3>A regra prática: 1 + 5 anos</h3>
      <p>
        Quando o governo não encontra o devedor ou bens para penhorar, o
        processo fica suspenso por 1 ano. Terminado esse ano, começam a correr
        os 5 anos da prescrição. O Superior Tribunal de Justiça definiu, em
        julgamento repetitivo que vale para todos os casos, que esse prazo de
        1 ano começa automaticamente quando a Fazenda fica sabendo que não
        encontrou o devedor ou bens, sem depender de decisão do juiz (REsp
        1.340.553/RS, Temas 566 a 571).
      </p>
      <h3>O que conta como cobrança (e o que não conta)</h3>
      <p>
        Nem toda movimentação no processo reinicia o prazo. Segundo o STJ, não
        basta o governo fazer pedidos no processo: só interrompem a prescrição
        atos que tiveram resultado. Na prática, contam:
      </p>
      <ul>
        <li>Uma citação válida, em que você foi formalmente notificado.</li>
        <li>Uma penhora ou bloqueio de bens que efetivamente aconteceu.</li>
        <li>
          Um parcelamento assinado por você, porque parcelar é reconhecer a
          dívida (artigo 174, parágrafo único, IV, do CTN).
        </li>
      </ul>
      <p>
        Por isso um processo pode estar cheio de páginas e, ainda assim, estar
        prescrito. E, antes de assinar um parcelamento de dívida antiga, vale
        verificar se ela já prescreveu.
      </p>
      <h3>Como saber se a minha dívida já prescreveu</h3>
      <p>
        O sinal mais comum é um processo de execução fiscal parado há mais de
        seis anos sem nenhum bloqueio ou penhora que tenha dado certo. Mas só a
        análise do histórico real do processo confirma com segurança. Cada caso
        tem suas particularidades, e detalhes nas datas fazem toda a diferença.
      </p>
      <h3>Base legal</h3>
      <ul>
        <li>Código Tributário Nacional, artigos 156, V, e 174.</li>
        <li>Lei 6.830/1980 (Lei de Execuções Fiscais), artigo 40.</li>
        <li>Súmula 314 do Superior Tribunal de Justiça.</li>
        <li>STJ, REsp 1.340.553/RS (Temas Repetitivos 566 a 571).</li>
      </ul>
      <DadosEstruturados slug="divida-com-governo-prescreve" />
      <BotaoDiagnostico frente="prescricao" />
    </div>
  );
};

const Article2 = () => {
  return (
    <div>
      <h2>Sou sócio de empresa com dívida fiscal: posso ser cobrado pessoalmente?</h2>
      <Autoria />
      <p>
        Em regra, não. A dívida tributária é da empresa, e o simples fato de a
        empresa não ter pago o imposto não torna o sócio responsável (Súmula
        430 do STJ). O sócio só pode ser cobrado pessoalmente em situações
        específicas, como fechamento irregular da empresa, fraude ou atos com
        excesso de poderes (artigo 135, III, do CTN). Mesmo nesses casos, o
        governo tem 5 anos para incluí-lo no processo (Tema 444 do STJ).
      </p>
      <h3>A empresa e o sócio são coisas diferentes</h3>
      <p>
        O patrimônio pessoal de quem é sócio fica separado do patrimônio da
        empresa. Por isso, em situações normais, o governo cobra a empresa e
        não pode simplesmente avançar sobre os bens pessoais dos donos. Deixar
        de pagar um tributo, por si só, não basta para responsabilizar o sócio.
      </p>
      <h3>Quando o sócio pode ser responsabilizado</h3>
      <p>
        O sócio que administra a empresa pode responder pessoalmente quando
        age com excesso de poderes ou viola a lei, o contrato social ou o
        estatuto. A situação mais comum é o fechamento irregular: se a empresa
        deixa de funcionar no endereço cadastrado sem avisar os órgãos
        competentes, a Justiça presume que ela foi encerrada de forma
        irregular, o que permite cobrar o sócio-administrador (Súmula 435 do
        STJ).
      </p>
      <p>
        Há um limite importante: quem administrava a empresa, mas saiu dela
        regularmente e não deu causa ao fechamento irregular posterior, não
        pode ser cobrado por esse motivo (Tema 962 do STJ).
      </p>
      <h3>O prazo de 5 anos para incluir o sócio</h3>
      <p>
        Mesmo quando o sócio pode ser responsabilizado, o governo tem 5 anos
        para pedir a inclusão dele no processo. Conforme o caso, esse prazo
        começa a contar da citação da empresa ou do ato que frustrou a
        cobrança, e só se aplica se o governo ficou parado nesse período (Tema
        444 do STJ). Quando o nome do sócio é incluído tarde demais, essa
        cobrança pode ser anulada.
      </p>
      <h3>O que isso significa na prática</h3>
      <p>
        Se você foi incluído pessoalmente numa execução fiscal muito tempo
        depois de a empresa ter sido cobrada, vale verificar com urgência. É
        possível que o prazo já tenha se esgotado e que o seu nome possa ser
        retirado do processo, protegendo o seu patrimônio pessoal.
      </p>
      <h3>Base legal</h3>
      <ul>
        <li>Código Tributário Nacional, artigo 135, III.</li>
        <li>Súmulas 430 e 435 do Superior Tribunal de Justiça.</li>
        <li>STJ, Temas Repetitivos 444 e 962.</li>
      </ul>
      <DadosEstruturados slug="socio-responde-divida-empresa" />
      <BotaoDiagnostico frente="prescricao" />
    </div>
  );
};

const Article3 = () => {
  return (
    <div>
      <h2>Como pagar menos imposto sobre aluguéis: pessoa física x holding</h2>
      <Autoria />
      <p>
        Quem recebe aluguel como pessoa física paga Imposto de Renda pela
        tabela progressiva, com alíquota de até 27,5%. Com os imóveis dentro de
        uma holding no Lucro Presumido, a carga sobre o aluguel costuma ficar
        em torno de 11,33%, somando IRPJ, CSLL, PIS e Cofins. Os lucros
        distribuídos aos sócios seguem sem imposto até R$ 50 mil por mês, pagos
        por uma mesma empresa a um mesmo sócio; acima disso, há retenção de 10%
        desde 2026 (Lei 15.270/2025).
      </p>
      <h3>Quanto custa receber aluguel como pessoa física</h3>
      <p>
        Quando o aluguel cai na sua conta como pessoa física, ele entra na
        tabela progressiva do Imposto de Renda, recolhido mensalmente pelo
        carnê-leão. Nas faixas mais altas, a alíquota chega a 27,5%.
      </p>
      <h3>Como funciona dentro de uma holding</h3>
      <p>
        Holding é uma empresa criada para ser a dona do seu patrimônio. Quando
        os imóveis pertencem a ela, o aluguel é tributado pelas regras de
        pessoa jurídica. No Lucro Presumido, a lei considera que 32% do aluguel
        é lucro. Sobre essa parcela incidem IRPJ (15%) e CSLL (9%), e sobre o
        aluguel total incidem PIS (0,65%) e Cofins (3%). A conta fecha em cerca
        de 11,33% do aluguel recebido.
      </p>
      <p>
        Esse percentual vale para aluguéis de até cerca de R$ 62,5 mil por mês.
        Acima disso entra o adicional de 10% do IRPJ, e holdings com receita
        acima de R$ 5 milhões por ano têm acréscimo na base de cálculo desde
        2026 (Lei Complementar 224/2025).
      </p>
      <h3>Um exemplo em números</h3>
      <p>
        Imagine alguém que recebe R$ 45 mil por mês em aluguéis. Como pessoa
        física, o Imposto de Renda pela tabela progressiva fica em cerca de R$
        11,5 mil por mês. Dentro de uma holding no Lucro Presumido, os tributos
        ficam em cerca de R$ 5,1 mil, uma economia de aproximadamente R$ 6,4
        mil por mês, ou mais de R$ 75 mil por ano.
      </p>
      <p>
        Nesse exemplo, o lucro distribuído ao sócio fica abaixo de R$ 50 mil
        por mês, então não há retenção na fonte. E, se o sócio não tiver outras
        rendas que somem mais de R$ 600 mil por ano, também não entra no
        Imposto de Renda mínimo criado pela Lei 15.270/2025.
      </p>
      <h3>Atenção: nem tudo é vantagem automática</h3>
      <p>
        A holding não é vantagem em toda situação. Para imóveis destinados à
        renda de aluguel no longo prazo, ela costuma valer a pena. Já para um
        imóvel que você pretende vender em breve, às vezes a pessoa física tem
        isenções que compensam mais. A estrutura também tem custos próprios,
        como contabilidade e registros.
      </p>
      <p>
        A reforma tributária muda esse cálculo a partir de 2027: PIS e Cofins
        dão lugar à CBS, e o IBS entra gradualmente até 2033, com regras
        específicas para a locação de imóveis (Emenda Constitucional 132/2023 e
        Lei Complementar 214/2025). Pessoas físicas com mais de três imóveis
        alugados e receita de aluguel acima de R$ 240 mil por ano também passam
        a pagar esses tributos. Por isso, a comparação precisa ser feita caso a
        caso.
      </p>
      <h3>Base legal</h3>
      <ul>
        <li>Lei 9.249/1995 (Lucro Presumido e distribuição de lucros).</li>
        <li>Lei 15.270/2025 (tributação de lucros e dividendos e IR mínimo).</li>
        <li>Lei Complementar 224/2025 (ajuste do Lucro Presumido).</li>
        <li>
          Emenda Constitucional 132/2023 e Lei Complementar 214/2025 (reforma
          tributária).
        </li>
      </ul>
      <DadosEstruturados slug="pagar-menos-imposto-aluguel-holding" />
      <BotaoDiagnostico frente="holding" />
    </div>
  );
};

const Article4 = () => {
  return (
    <div>
      <h2>Inventário pode consumir boa parte do patrimônio: como proteger sua família</h2>
      <Autoria />
      <p>
        O inventário pesa porque soma, de uma só vez, o imposto sobre a herança
        (ITCMD, que no Ceará vai de 2% a 8%), custas, honorários e outras
        despesas, e ainda pode levar anos. A holding familiar permite organizar
        a sucessão ainda em vida: os bens passam para uma empresa e as quotas
        são doadas aos herdeiros, normalmente com usufruto, para que o dono
        mantenha o controle e a renda enquanto viver.
      </p>
      <h3>Por que o inventário pesa tanto</h3>
      <p>
        Quando alguém falece sem planejamento, a transmissão dos bens passa pelo
        inventário. O principal custo é o ITCMD, imposto estadual sobre
        heranças e doações. No Ceará, ele é cobrado por faixas progressivas, de
        2% a 8% (Lei estadual 15.812/2015), e desde a reforma tributária o
        ITCMD progressivo passou a ser obrigatório em todo o país (Emenda
        Constitucional 132/2023). A esse imposto se somam custas, honorários e
        despesas com certidões e registros.
      </p>
      <p>
        Além do dinheiro, há o tempo. Um inventário judicial pode levar anos,
        e durante esse período a família muitas vezes não consegue vender nem
        administrar livremente os bens. Quando os herdeiros estão de acordo e
        cumprem os requisitos legais, o inventário pode ser feito em cartório,
        o que é mais rápido, mas o imposto e as despesas continuam.
      </p>
      <p>
        Não é raro que famílias precisem vender bens às pressas, por valores
        abaixo do mercado, apenas para arcar com os custos do próprio inventário.
      </p>
      <h3>Como a holding familiar muda esse cenário</h3>
      <p>
        A holding familiar permite organizar a sucessão ainda em vida. Você
        coloca os bens dentro de uma empresa e doa as quotas dessa empresa aos
        herdeiros de forma planejada. Veja as principais vantagens:
      </p>
      <ul>
        <li>
          Você pode manter o controle e a renda dos bens enquanto viver, por
          meio do usufruto das quotas (artigo 1.394 do Código Civil).
        </li>
        <li>
          Os bens que estão na holding não precisam passar por inventário: com
          o falecimento do usufrutuário, os herdeiros já são os donos das
          quotas.
        </li>
        <li>
          O ITCMD continua sendo devido, mas é pago na doação das quotas, de
          forma planejada, e não de surpresa no momento do luto.
        </li>
        <li>
          É possível incluir regras que evitam conflitos entre os herdeiros e
          protegem o patrimônio em caso de divórcio, como cláusulas de
          incomunicabilidade.
        </li>
      </ul>
      <p>
        A holding precisa ser feita antes de existirem dívidas. Transferir bens
        para fugir de credores pode ser anulado como fraude (artigo 158 do
        Código Civil e artigo 792 do Código de Processo Civil).
      </p>
      <h3>Planejar é um ato de cuidado</h3>
      <p>
        Mais do que economia, o planejamento sucessório é uma forma de proteger
        quem você ama de um processo desgastante num momento já difícil.
        Organizar isso em vida é deixar tudo claro e resolvido, evitando que a
        família precise lidar com burocracia e custos altos durante o luto.
      </p>
      <h3>Base legal</h3>
      <ul>
        <li>Lei estadual 15.812/2015 (ITCMD no Ceará).</li>
        <li>Constituição Federal, artigo 155, com a Emenda Constitucional 132/2023.</li>
        <li>Código Civil, artigos 158 e 1.394.</li>
        <li>Código de Processo Civil, artigo 792.</li>
      </ul>
      <DadosEstruturados slug="evitar-inventario-caro-holding" />
      <BotaoDiagnostico frente="holding" />
    </div>
  );
};

const Article5 = () => {
  return (
    <div>
      <h2>Aposentado com doença grave não paga Imposto de Renda: veja se você tem direito</h2>
      <Autoria />
      <p>
        Sim. Aposentados, pensionistas e militares reformados que têm uma das
        doenças graves listadas na lei não pagam Imposto de Renda sobre a
        aposentadoria, a pensão ou a reforma (artigo 6º, XIV, da Lei
        7.713/1988). O direito vale mesmo que a doença esteja controlada ou
        curada (Súmula 627 do STJ) e permite pedir de volta o imposto descontado
        nos últimos 5 anos, com correção pela taxa Selic.
      </p>
      <h3>O que diz a lei</h3>
      <p>
        A lei determina que aposentados, pensionistas e reformados portadores de
        determinadas doenças graves ficam isentos do Imposto de Renda sobre os
        proventos de aposentadoria, pensão ou reforma. É um benefício de
        natureza humanitária, criado em reconhecimento às despesas e
        dificuldades que essas doenças trazem. A isenção não é automática: é
        preciso pedir.
      </p>
      <h3>Quais doenças dão direito à isenção</h3>
      <p>A lei lista as doenças que dão direito. Entre as mais comuns estão:</p>
      <ul>
        <li>Câncer (neoplasia maligna), de qualquer tipo.</li>
        <li>Cardiopatia grave e doença de Parkinson.</li>
        <li>
          Cegueira (inclusive em apenas um dos olhos, segundo a jurisprudência
          do STJ), esclerose múltipla e nefropatia grave.
        </li>
        <li>AIDS, hepatopatia grave, paralisia irreversível, entre outras.</li>
      </ul>
      <p>
        O STJ entende que essa lista é fechada (Tema 250), por isso o
        diagnóstico precisa se enquadrar em uma das doenças previstas na lei.
      </p>
      <h3>Importante: você não precisa estar doente no momento</h3>
      <p>
        Muita gente acredita que, por estar curada, perdeu o direito. Não é
        verdade. O STJ firmou que a isenção deve ser concedida ou mantida sem
        exigir que os sintomas sejam atuais nem que a doença tenha voltado
        (Súmula 627). Não é preciso estar em tratamento nem incapacitado.
      </p>
      <p>
        No pedido feito ao INSS ou ao órgão que paga o benefício, a lei exige
        laudo de serviço médico oficial (artigo 30 da Lei 9.250/1995). Na
        Justiça, o juiz pode reconhecer a doença por outros documentos médicos,
        sem laudo oficial (Súmula 598 do STJ).
      </p>
      <h3>Quem não tem direito</h3>
      <p>
        A isenção vale sobre aposentadoria, pensão ou reforma, e não sobre o
        salário de quem continua trabalhando (Tema 1037 do STJ). Quem é
        aposentado e também trabalha tem isenção sobre a aposentadoria, mas
        continua pagando imposto sobre o salário.
      </p>
      <h3>O dinheiro que pode voltar</h3>
      <p>
        Além de parar de pagar o imposto daqui para frente, é possível reaver o
        que foi descontado indevidamente nos últimos cinco anos (artigo 168 do
        CTN), com correção pela taxa Selic. Para quem foi diagnosticado há algum
        tempo, esse valor pode ser significativo. O direito também vale para os
        herdeiros, quando o titular faleceu sem ter pedido a isenção.
      </p>
      <h3>Base legal</h3>
      <ul>
        <li>Lei 7.713/1988, artigo 6º, XIV.</li>
        <li>Lei 9.250/1995, artigo 30.</li>
        <li>Súmulas 598 e 627 do Superior Tribunal de Justiça.</li>
        <li>STJ, Temas Repetitivos 250 e 1037.</li>
        <li>Código Tributário Nacional, artigo 168.</li>
      </ul>
      <DadosEstruturados slug="isencao-imposto-renda-doenca-grave" />
      <BotaoDiagnostico frente="isencao" />
    </div>
  );
};

const Article6 = () => {
  return (
    <div>
      <h2>5 sinais de que sua empresa pode estar pagando imposto demais</h2>
      <Autoria />
      <p>
        Os sinais mais comuns são: nunca ter feito uma revisão tributária,
        nunca ter reavaliado o regime de tributação, não aproveitar créditos de
        PIS e Cofins, ter crescido sem ajustar a gestão tributária e sentir que
        paga muito sem saber explicar por quê. Quando há pagamento a mais, a lei
        permite recuperar o que foi pago indevidamente nos últimos 5 anos
        (artigos 165 e 168 do Código Tributário Nacional).
      </p>
      <h3>1. Você nunca fez uma revisão tributária</h3>
      <p>
        Se a sua empresa nunca passou por uma análise especializada da carga
        tributária, há grande chance de existirem oportunidades não
        aproveitadas. Muitas empresas seguem pagando da mesma forma há anos, sem
        questionar se há um caminho mais eficiente e legal.
      </p>
      <h3>2. O regime tributário nunca foi reavaliado</h3>
      <p>
        Simples Nacional, Lucro Presumido, Lucro Real: a escolha do regime certo
        faz enorme diferença no quanto você paga. Conforme a empresa cresce e
        muda, o regime ideal também pode mudar. Desde 2026, empresas do Lucro
        Presumido com receita acima de R$ 5 milhões por ano pagam mais IRPJ e
        CSLL sobre a parte que passa desse limite (Lei Complementar 224/2025), o
        que torna a reavaliação ainda mais importante.
      </p>
      <h3>3. Você desconhece os créditos a que tem direito</h3>
      <p>
        No Lucro Real, PIS e Cofins seguem o regime não cumulativo, que permite
        descontar créditos sobre diversos custos e despesas (Leis 10.637/2002 e
        10.833/2003). Créditos não aproveitados podem reduzir o valor a pagar ou
        gerar valores a recuperar dos últimos cinco anos.
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
        sobre o porquê, uma análise técnica pode revelar oportunidades de
        economia.
      </p>
      <h3>E a reforma tributária?</h3>
      <p>
        A partir de 2027, PIS e Cofins deixam de existir e dão lugar à CBS
        (Emenda Constitucional 132/2023). A reforma não apaga o direito de
        recuperar valores pagos indevidamente nos últimos 5 anos, mas torna mais
        urgente fazer a revisão agora, enquanto os tributos antigos ainda estão
        em vigor.
      </p>
      <h3>O que fazer a respeito</h3>
      <p>
        O caminho é uma revisão tributária feita por especialista, que analisa a
        situação da empresa, identifica o que está sendo pago a mais e aponta o
        que pode ser recuperado dos últimos cinco anos, sempre dentro da lei.
        Muitas vezes, a economia gerada supera com folga o custo da análise.
      </p>
      <h3>Base legal</h3>
      <ul>
        <li>Código Tributário Nacional, artigos 165 e 168.</li>
        <li>Leis 10.637/2002 e 10.833/2003 (PIS e Cofins não cumulativos).</li>
        <li>Lei Complementar 224/2025 (ajuste do Lucro Presumido).</li>
        <li>Emenda Constitucional 132/2023 (reforma tributária).</li>
      </ul>
      <DadosEstruturados slug="empresa-paga-imposto-demais" />
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
      "A dívida tributária prescreve em 5 anos (art. 174 do CTN) e, na execução fiscal parada, após 1 + 5 anos (Súmula 314 do STJ). Saiba se a sua já prescreveu.",
  },
  {
    id: 2,
    slug: "socio-responde-divida-empresa",
    content: <Article2 />,
    title: "Sou sócio de empresa com dívida fiscal: posso ser cobrado pessoalmente?",
    description:
      "Em regra, não (Súmula 430 do STJ). Veja quando o sócio responde por dívida tributária da empresa e o prazo de 5 anos para incluí-lo (Tema 444 do STJ).",
  },
  {
    id: 3,
    slug: "pagar-menos-imposto-aluguel-holding",
    content: <Article3 />,
    title: "Como pagar menos imposto sobre aluguéis: pessoa física x holding",
    description:
      "Aluguel na pessoa física paga até 27,5% de IR; numa holding no Lucro Presumido, cerca de 11,33%. Veja a conta, os dividendos em 2026 e quando vale a pena.",
  },
  {
    id: 4,
    slug: "evitar-inventario-caro-holding",
    content: <Article4 />,
    title: "Inventário pode consumir boa parte do patrimônio: como proteger sua família",
    description:
      "Entenda por que o inventário é caro e demorado (ITCMD de 2% a 8% no Ceará, custas e honorários) e como a holding familiar organiza a sucessão ainda em vida.",
  },
  {
    id: 5,
    slug: "isencao-imposto-renda-doenca-grave",
    content: <Article5 />,
    title: "Aposentado com doença grave não paga Imposto de Renda: veja se você tem direito",
    description:
      "Aposentados e pensionistas com doença grave são isentos de IR (Lei 7.713/88), mesmo após a cura (Súmula 627 do STJ), e podem reaver até 5 anos de imposto.",
  },
  {
    id: 6,
    slug: "empresa-paga-imposto-demais",
    content: <Article6 />,
    title: "5 sinais de que sua empresa pode estar pagando imposto demais",
    description:
      "Cinco sinais de que sua empresa paga mais tributos do que deveria e como a revisão tributária recupera valores dos últimos 5 anos (art. 168 do CTN).",
  },
];
