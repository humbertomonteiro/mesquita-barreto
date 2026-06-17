import styles from "./socials.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className={styles.socials}>
      {/* <a href="">
        <FaFacebookF />
      </a> */}
      <a href="https://www.instagram.com/ewertonbarretoadv/" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
};

export default Socials;
