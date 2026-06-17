import Title from "../../components/shared/Title";
import SEO from "../../components/shared/SEO";
import styles from "./activity.module.css";

import BoxCTA from "../../components/shared/BoxCTA";

import { Link } from "react-router-dom";
import { areasActivity } from "../../data/constants/activitys";

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
              <Link data-button="3" to={item.path}>
                Saiba mais
              </Link>
            </div>
          ))}
        </section>

        <BoxCTA />
      </div>
    </>
  );
};

export default Activity;
