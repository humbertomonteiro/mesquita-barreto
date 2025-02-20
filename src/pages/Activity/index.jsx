import Title from "../../components/shared/Title";
import styles from "./activity.module.css";

import BoxCTA from "../../components/shared/BoxCTA";

import { Link } from "react-router-dom";
import { areasActivity } from "../../data/constants/activitys";

const Activity = () => {
  return (
    <div className={styles.container}>
      <Title text={"Áreas de Atuação"} />
      <p>
        Atuamos em diversas áreas do direito com responsabilidade e compromisso.
      </p>
      <section className={styles.boxes}>
        {areasActivity.map((item, index) => (
          <div key={index} className={styles.box}>
            {item.icon}
            <h3>{item.title}</h3>
            <Link data-button="3" to={item.path}>
              Saiba mais
            </Link>
          </div>
        ))}
      </section>

      <BoxCTA />
    </div>
  );
};

export default Activity;
