import styles from "./boxCTA.module.css";

import img from "../../../assets/imgs/mesquita-standing.jpg";

import { Link } from "react-router-dom";

const BoxCTA = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentInfo}>
          <div className={styles.text}>
            <h2>
              Para uma análise estratégica e específica para o seu caso, fale
              conosco e veja como podemos ajudar.
            </h2>
            <p>Fale com nossa equipe e nos informe como podemos te ajudar.</p>
            <Link
              target="_blank"
              to="https://wa.me/558596135771?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20jurídica.%20Poderia%20me%20ajudar%3F
"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
        <img src={img} alt="Advogado Mesquita" />
      </div>
      <div className={styles.boxStyle}></div>
    </section>
  );
};

export default BoxCTA;
