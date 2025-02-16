import styles from "./team.module.css";

import mesquita from "../../../assets/imgs/mesquita.jpg";

const Team = () => {
  return (
    <section className={styles.container}>
      <a href="">
        <img src={mesquita} alt="Advogado Mesquita" />
      </a>
      <div className={styles.info}>
        <h2>Ewerton Barreto</h2>
        <p>contato@ewertonbarreto.com.br</p>
        <p>OAB/CE 25.354</p>
      </div>
    </section>
  );
};

export default Team;
