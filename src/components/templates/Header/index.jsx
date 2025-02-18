import styles from "./header.module.css";

import { useState } from "react";

import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import Socials from "../../shared/Socials";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/imgs/logo-dark.png";
import office from "../../../assets/imgs/bg-office.jpg";

import { useLocation } from "react-router-dom";

const Header = () => {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [showInputSearch, setShowInputSearch] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const changeCloseNavMobile = () => {
    setShowNavMobile(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/articles?search=${encodeURIComponent(search)}`);
      setShowInputSearch(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className={styles.buttonsLogo}>
          <button onClick={() => setShowInputSearch(true)}>
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
          <Link to="/partner">Sobre</Link>
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
          <button onClick={() => setShowInputSearch(true)}>
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
                Sobre
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

      <div
        className={location.pathname === "/" ? styles.imgHome : styles.imgPath}
      >
        <img src={office} alt="Advogado Mesquita" />
      </div>

      {showInputSearch && (
        <div className={styles.boxSearch}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar artigos..."
            />
            <button type="submit">
              <IoIosSearch />
            </button>
          </form>
          <button o onClick={() => setShowInputSearch(false)}>
            <IoClose />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
