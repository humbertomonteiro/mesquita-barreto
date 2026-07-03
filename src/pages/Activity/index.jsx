import Title from "../../components/shared/Title";
import SEO from "../../components/shared/SEO";
import styles from "./activity.module.css";
import BoxCTA from "../../components/shared/BoxCTA";
import { FaWhatsapp } from "react-icons/fa";
import { areasActivity } from "../../data/constants/activitys";

const WHATSAPP_NUMERO = "5585996135771";

const Activity = () => {
  return (
    <>
      <SEO
        title="Áreas de Atuação | Direito Tributário, Holding e Empresarial | Mesquita Barreto"
        description="Atuamos em blindagem patrimonial, redução de impostos, planejamento tributário, holding familiar, defesa em execução fiscal e demandas empresariais em Fortaleza-CE."
        canonical="/activity"
      />
      <div className={styles.container}>
        <Title text="Áreas de Atuação" as="h1" />
        <p>
          Atuamos em diversas áreas do direito com responsabilidade e compromisso.
        </p>
        <section className={styles.boxes}>
          {areasActivity.map((item, index) => (
            <div key={index} className={styles.box}>
              {item.icon}
              <h2>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
              <a
                className={styles.whatsappBtn}
                href={
                  "https://api.whatsapp.com/send?phone=" +
                  WHATSAPP_NUMERO +
                  "&text=" +
                  encodeURIComponent(item.whatsapp)
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> Quero saber mais
              </a>
            </div>
          ))}
        </section>
        <BoxCTA />
      </div>
    </>
  );
};
export default Activity;
