import Title from "../../components/shared/Title";
import styles from "./activity.module.css";

import BoxCTA from "../../components/shared/BoxCTA";

import { IoIosLock } from "react-icons/io";
import { RiMoneyDollarCircleFill, RiSafe3Fill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";

import { Link } from "react-router-dom";

const Activity = () => {
  const areasActivity = [
    {
      title: "Blindagem Patrimonial",
      icon: <IoIosLock />,
      path: "/activity/blindagem-patrimonial",
    },
    {
      title: " Redução de Impostos",
      icon: <RiMoneyDollarCircleFill />,
      path: "/activity/reducao-de-impostos",
    },
    {
      title: "Planejamento Tributário",
      icon: <BsGraphUpArrow />,
      path: "/activity/planejamento-tributario",
    },
    {
      title: "Holding",
      icon: <RiSafe3Fill />,
      path: "/activity/holding",
    },
  ];

  return (
    <div className={styles.container}>
      <Title text={"Áreas de Atuação"} />
      <p>
        Atuamos em diversas áreas do direito com responsabilidade e compromisso.
      </p>
      <section className={styles.boxes}>
        {areasActivity.map((item) => (
          <div className={styles.box}>
            {item.icon}
            <h3>{item.title}</h3>
            <Link to={item.path}>Saiba mais</Link>
          </div>
        ))}
      </section>

      <BoxCTA />
    </div>
  );
};

export default Activity;
