import styles from "./buttonWhatsapp.module.css";

import { FaWhatsapp } from "react-icons/fa";

const ButtonWhatsapp = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://api.whatsapp.com/send?phone=5585996135771&text=Ola%20vim%20do%20Site"
        target="_blank"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ButtonWhatsapp;
