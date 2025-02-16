import styles from "./header.module.css";

import { useState } from "react";

import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import Socials from "../../shared/Socials";

import { Link } from "react-router-dom";

import logo from "../../../assets/imgs/logo-dark.png";

const Header = () => {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const changeCloseNavMobile = () => {
    setShowNavMobile(false);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className={styles.buttonsLogo}>
          <button>
            <IoIosSearch />
          </button>
          <button onClick={() => setShowNavMobile(true)}>
            <HiBars3 />
          </button>
        </div>
      </div>

      <ul className={styles.nav}>
        <li>
          <Link to="/office">O Escritório</Link>
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
          <button>
            <IoIosSearch />
          </button>
        </li>
      </ul>

      {showNavMobile && (
        <div>
          <div className={styles.closeNavMobile}>
            <button onClick={() => setShowNavMobile(false)}>
              <IoClose />
            </button>
          </div>
          <ul className={styles.navMobile}>
            <li>
              <Link onClick={changeCloseNavMobile} to="/office">
                O Escritório
              </Link>
            </li>
            <li>
              <Link onClick={changeCloseNavMobile} to="/partner">
                Sócios
              </Link>
            </li>
            <li>
              <Link onClick={changeCloseNavMobile} to="/activity">
                Áreas de atuação
              </Link>
            </li>
            <li>
              <Link onClick={changeCloseNavMobile} to="/articles">
                Artigos
              </Link>
            </li>
            <li>
              <Link onClick={changeCloseNavMobile} to="/contacts">
                Contato
              </Link>
            </li>
            <li>
              <Link onClick={changeCloseNavMobile} to="/work-us">
                Trabalhe Conosco
              </Link>
            </li>
            <li>
              <Link onClick={changeCloseNavMobile} to="/be-partner">
                Seja um Parceiro
              </Link>
            </li>

            <li className={styles.socials}>
              <Socials />
            </li>
          </ul>
        </div>
      )}

      <div className={styles.bgImg}>
        <img
          src="https://tuliomagno.com.br/wp-content/uploads/2022/01/banner-home-1600x600.jpg"
          alt="Background escritório"
        />
      </div>
    </header>
  );
};

export default Header;
