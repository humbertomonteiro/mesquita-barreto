import Socials from "../../shared/Socials";
import styles from "./footer.module.css";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { useState } from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  const [showMenuFooter, setShowMenuFooter] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.navWithButton}>
        <button onClick={() => setShowMenuFooter(!showMenuFooter)}>
          Menu {showMenuFooter ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        <ul className={styles.navFooter}>
          <li>
            <Link to="/office">O Escritório</Link>
          </li>
          <li>
            <Link to="/partner">Sócios</Link>
          </li>
          <li>
            <Link to="activity">Áreas de atuação</Link>
          </li>
          <li>
            <Link to="/articles">Artigos</Link>
          </li>
          <li>
            <Link to="/contacts">Contato</Link>
          </li>
          <li>
            <Link to="/work-us">Trabalhe Conosco</Link>
          </li>
          <li>
            <Link to="/be-partner">Seja um Parceiro</Link>
          </li>
        </ul>

        {showMenuFooter && (
          <ul className={styles.navFooterMobile}>
            <li>
              <Link to="office">O Escritório</Link>
            </li>
            <li>
              <Link to="/partner">Sócios</Link>
            </li>
            <li>
              <Link to="/activity">Áreas de atuação</Link>
            </li>
            <li>
              <Link to="/articles">Artigos</Link>
            </li>
            <li>
              <Link to="/contacts">Contato</Link>
            </li>
            <li>
              <Link to="/work-us">Trabalhe Conosco</Link>
            </li>
            <li>
              <Link to="/be-partner">Seja um Parceiro</Link>
            </li>
          </ul>
        )}
      </div>
      <div className={styles.contents}>
        <div className={styles.infos}>
          <p>Av. Dom Luís, 1200, sala 1902, Torre 1, Pátio Dom Luís</p>
          <p>Aldeota, Fortaleza – CE</p>
          <p>CEP 60.160-230</p>
          <p>(85) 99613-5771 – contato@ewertonbarreto.com.br</p>
        </div>
        <div className={styles.socials}>
          <Socials />
        </div>
      </div>
      <div className={styles.created}>
        Criado por <strong>&lt; Hum Dev /&gt;</strong>
      </div>
    </footer>
  );
};

export default Footer;
