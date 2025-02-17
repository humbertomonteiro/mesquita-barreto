import Title from "../../components/shared/Title";
import styles from "./partner.module.css";

import mesquita from "../../assets/imgs/mesquita.jpg";

import BoxCTA from "../../components/shared/BoxCTA";

const Partner = () => {
  return (
    <div className={styles.container}>
      <Title text={"Sobre"} />

      <section className={styles.content}>
        <div className={styles.img}>
          <img src={mesquita} alt="Imagem do Advogado Mesquita" />
        </div>
        <div className={styles.text}>
          <h3>Rafael Ewerton Mesquita Barreto</h3>
          <span>contato@mesquita.com.br</span>
          <span>OAB/CE 32.555</span>
          <ul>
            <li>
              – Bacharel em Direito pela Universidade de Fortaleza – UNIFOR,
              2015.1;
            </li>
            <li>– Advogado inscrito na OAB/CE sob o nº. 32.555;</li>
            <li>– Especialista em Direito e Processo Tributário;</li>
            <li>
              – Advogado homenageado no Anuário do Direito do Ceará, organizado
              pelo Grupo O Povo de Comunicação, no ano de 2020, pelo destaque
              profissional na Advocacia;
            </li>
            <li>
              – Aprovado no XV Exame da Ordem ainda no 8º semestre de curso;
            </li>
            <li>
              – Especialista na formação em Holding pelo grupo SAVE Academy em
              Jaraguá do Sul, estado de Santa Catarina, 2022;
            </li>
            <li>
              – Membro do Instituto Cearense de Estudos Tributários – ICET,
              desde 2013;
            </li>
            <li>
              – Mais de dez Anos de experiência pratica na advocacia tributária.
            </li>
          </ul>
        </div>
      </section>
      <BoxCTA />
    </div>
  );
};

export default Partner;
