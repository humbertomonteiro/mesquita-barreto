import styles from "./socials.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className={styles.socials}>
      {/* <a href="">
        <FaFacebookF />
      </a> */}
      <a
        href="https://www.instagram.com/rafaewertonbarreto?igsh=eXZpZWNld3doMW0%3D"
        target="_blank"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default Socials;
