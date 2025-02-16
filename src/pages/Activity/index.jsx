import Title from "../../components/shared/Title";
import styles from "./activity.module.css";

import BoxCTA from "../../components/shared/BoxCTA";

import { FaFileContract } from "react-icons/fa";
import { Link } from "react-router-dom";

const Activity = () => {
  const areasActivity = [
    {
      title: "Licitações e Contratos Administrativos",
      icon: <FaFileContract />,
      path: "/activity/licitacoes",
    },
    {
      title: "Licitações e Contratos Administrativos",
      icon: <FaFileContract />,
      path: "/activity/licitacoes",
    },
    {
      title: "Licitações e Contratos Administrativos",
      icon: <FaFileContract />,
      path: "/activity/licitacoes",
    },
    {
      title: "Licitações e Contratos Administrativos",
      icon: <FaFileContract />,
      path: "/activity/licitacoes",
    },
    {
      title: "Licitações e Contratos Administrativos",
      icon: <FaFileContract />,
      path: "/activity/licitacoes",
    },
    {
      title: "Licitações e Contratos Administrativos",
      icon: <FaFileContract />,
      path: "/activity/licitacoes",
    },
    {
      title: "Licitações e Contratos Administrativos",
      icon: <FaFileContract />,
      path: "/activity/licitacoes",
    },
    {
      title: "Licitações e Contratos Administrativos",
      icon: <FaFileContract />,
      path: "/activity/licitacoes",
    },
    {
      title: "Licitações e Contratos Administrativos",
      icon: <FaFileContract />,
      path: "/activity/licitacoes",
    },
    {
      title: "Licitações e Contratos Administrativos",
      icon: <FaFileContract />,
      path: "/activity/licitacoes",
    },
    {
      title: "Licitações e Contratos Administrativos",
      icon: <FaFileContract />,
      path: "/activity/licitacoes",
    },
    {
      title: "Licitações e Contratos Administrativos",
      icon: <FaFileContract />,
      path: "/activity/licitacoes",
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
