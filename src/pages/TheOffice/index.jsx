import BoxCTA from "../../components/shared/BoxCTA";
import ImagesTribunal from "../../components/shared/ImagesTribunal";
import Title from "../../components/shared/Title";
import styles from "./theOffice.module.css";

const TheOffice = () => {
  return (
    <div className={styles.container}>
      <section className={styles.office}>
        <Title text="O Escritório" />
        <img
          src="https://patiodomluis.com.br/wp-content/uploads/2024/11/Patio-Dom-Luis-Fortaleza-1.jpg"
          alt="Predio onde está localizado o escritório"
        />
        <p>
          Nosso escritório é especializado na advocacia empresarial e conta com
          um time altamente qualificado, liderado por sócios com mais de dez
          anos de experiência. Atuamos com dedicação exclusiva às demandas de
          empresas e empresários, oferecendo suporte jurídico estratégico e
          eficiente.
        </p>
        <p>
          Com sede em Fortaleza e parcerias com escritórios renomados no Brasil,
          especialmente nos estados de Santa Catarina e Paraná, garantimos uma
          atuação nacional sólida e confiável.
        </p>
        <p>
          Nossa estrutura moderna e bem localizada – Av. Dom Luís, 1200, sala
          1902, Torre 1, Pátio Dom Luís, Aldeota, Fortaleza – CE – foi pensada
          para oferecer o máximo de conforto e comodidade aos nossos clientes.
        </p>
      </section>

      <ImagesTribunal />

      <BoxCTA />
    </div>
  );
};

export default TheOffice;
