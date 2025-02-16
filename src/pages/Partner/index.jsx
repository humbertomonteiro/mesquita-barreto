import Title from "../../components/shared/Title";
import styles from "./partner.module.css";

import mesquita from "../../assets/imgs/mesquita.jpg";

import BoxCTA from "../../components/shared/BoxCTA";

const Partner = () => {
  return (
    <div className={styles.container}>
      <Title text={"Sócios"} />

      <section className={styles.content}>
        <div className={styles.img}>
          <img src={mesquita} alt="Imagem do Advogado Mesquita" />
        </div>
        <div className={styles.text}>
          <h3>Mesquita Barreto</h3>
          <span>contato@mesquita.com.br</span>
          <span>OAB/CE 24.853</span>
          <ul>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
            <li>
              – Coordenador Geral do Conselho de Defesa do Policial no Exercício
              da Função (CDPEF), órgão vinculado à Secretaria de Segurança
              Pública do Estado do Ceará (SSPDS), desde agosto de 2017; –
              Procurador da Superintendência de Pesquisa e Estratégia da
              Segurança Pública (SUPESP), órgão vinculado à Secretaria de
              Segurança Pública do Estado do Ceará (SSPDS), no período de maio
              de 2019 a maio de 2020;
            </li>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
            <li>
              – Advogado homenageado no Anuário do Direito do Ceará, organizado
              pelo Grupo O Povo de Comunicação, no ano de 2023, pelo destaque
              profissional na Advocacia;
            </li>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
            <li>
              – Advogado indicado ao Selo Referência Nacional na categoria
              Advocacia & Justiça pela Agência Nacional de Cultura,
              Empreendedorismo e Comunicação (ANCEC), no ano de 2020, pelo
              destaque profissional na Advocacia;
            </li>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR
              (2010.2);
            </li>
          </ul>
        </div>
      </section>
      <BoxCTA />
    </div>
  );
};

export default Partner;
