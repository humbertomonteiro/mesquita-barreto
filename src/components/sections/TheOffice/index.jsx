import styles from "./theOffice.module.css";

import { Link } from "react-router-dom";

import predio from "../../../assets/imgs/predio.jpeg";

const TheOffice = () => {
  const topPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>O Escritório: </h1>
        <p>
          Mesquita Barreto Advocacia Empresarial é um escritório de advocacia
          definido pela capacidade de aliar compromisso, confiança, excelência,
          exclusividade e inovação na prestação de serviços advocatícios.
        </p>
        <p>
          Acreditamos que a combinação de valores individuais, plurais e
          harmônicos, aliada à experiência de nossos sócios, nos permite ter uma
          visão ampla e multidisciplinar, focando nas complexas necessidades de
          empreender no Brasil.
        </p>
        <p>
          Do pequeno empreendedor aos maiores grupos empresariais, tratamos
          todos com a máxima atenção e dedicação, fazendo de suas necessidades a
          nossa missão.
        </p>
        <p>Com o cliente, em qualquer lugar, em qualquer momento, sempre.</p>

        <Link onClick={topPage} to="/office" data-button="1">
          Saiba mais
        </Link>
      </div>
      <Link onClick={topPage} to="/office" className={styles.img}>
        <img
          src={predio}
          alt="Prédio do escritório Mesquita Barreto Advocacia em Fortaleza"
        />
      </Link>
    </section>
  );
};

export default TheOffice;
