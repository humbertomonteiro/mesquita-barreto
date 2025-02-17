import styles from "./team.module.css";

import mesquita from "../../../assets/imgs/mesquita.jpg";

import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section className={styles.container}>
      <Link to="/partner">
        <img src={mesquita} alt="Advogado Mesquita" />
      </Link>
      <div className={styles.info}>
        <h2>Rafael Ewerton Mesquita Barreto</h2>
        <p>contato@ewertonbarreto.com.br</p>
        <p>OAB/CE 32.555</p>
      </div>
    </section>
  );
};

export default Team;
