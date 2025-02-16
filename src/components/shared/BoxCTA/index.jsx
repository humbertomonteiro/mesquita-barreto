import styles from "./boxCTA.module.css";

import img from "../../../assets/imgs/mesquita-standing.jpg";

const BoxCTA = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentInfo}>
          <div className={styles.text}>
            <h2>
              Para uma análise estratégica e específica para o seu caso, fale
              conosco e e veja como podemos ajudar.
            </h2>
            <p>Fale com nossa equipe e nos informe como podemos te ajudar.</p>
            <a href="">Fale Conosco</a>
          </div>
        </div>
        <img src={img} alt="Advogado Mesquita" />
      </div>
      <div className={styles.boxStyle}></div>
    </section>
  );
};

export default BoxCTA;
