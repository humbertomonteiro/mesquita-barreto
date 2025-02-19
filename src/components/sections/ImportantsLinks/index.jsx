import styles from "./importantsLinks.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";

import { IoIosLock } from "react-icons/io";
import { RiMoneyDollarCircleFill, RiSafe3Fill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";

import { Link } from "react-router-dom";

const ImportantsLinks = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.desktop}>
        <li>
          <Link to="/activity/blindagem-patrimonial">
            <IoIosLock />
            Blindagem Patrimonial
          </Link>
        </li>
        <li>
          <Link to="/activity/reducao-de-impostos">
            <RiMoneyDollarCircleFill />
            Redução de Impostos
          </Link>
        </li>
        <li>
          <Link to="/activity/planejamento-tributario">
            <BsGraphUpArrow />
            Planejamento Tributário
          </Link>
        </li>
        <li>
          <Link to="/activity/holding">
            <RiSafe3Fill />
            Holding
          </Link>
        </li>
      </ul>

      <ul className={styles.mobile}>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <li>
              <Link to="/activity/blindagem-patrimonial">
                <IoIosLock />
                Blindagem Patrimonial
              </Link>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <Link to="/activity/reducao-de-impostos">
                <RiMoneyDollarCircleFill />
                Redução de Impostos
              </Link>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <Link to="/activity/planejamento-tributario">
                <BsGraphUpArrow />
                Planejamento Tributário
              </Link>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <Link to="/activity/holding">
                <RiSafe3Fill />
                Holding
              </Link>
            </li>
          </SwiperSlide>
        </Swiper>
      </ul>
    </nav>
  );
};

export default ImportantsLinks;
