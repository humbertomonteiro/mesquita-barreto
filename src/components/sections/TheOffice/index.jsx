import styles from "./theOffice.module.css";

import { Link } from "react-router-dom";

const TheOffice = () => {
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

        <Link to="/office">Saiba mais</Link>
      </div>
      <Link to="/office" className={styles.img}>
        <img
          src="https://patiodomluis.com.br/wp-content/uploads/2024/11/Patio-Dom-Luis-Fortaleza-1.jpg"
          alt="Foto do predio de fortaleza"
        />
      </Link>
    </section>
  );
};

export default TheOffice;
