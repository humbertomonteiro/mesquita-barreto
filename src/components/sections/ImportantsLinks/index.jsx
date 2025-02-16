import styles from "./importantsLinks.module.css";

import { FaBalanceScale } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";

const ImportantsLinks = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.desktop}>
        <li>
          <a href="">
            <FaBalanceScale />
            Áreas de Atuação
          </a>
        </li>
        <li>
          <a href="">
            <FaHandshake />
            Seja um Parceiro
          </a>
        </li>
        <li>
          <a href="">
            <FaInstagram />
            Acompanhe no Instagram
          </a>
        </li>
        <li>
          <a href="">
            <SiGoogledocs />
            Trabalhe conosco
          </a>
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
              <a href="">
                <FaBalanceScale />
                Áreas de Atuação
              </a>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <a href="">
                <FaHandshake />
                Seja um Parceiro
              </a>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <a href="">
                <FaInstagram />
                Acompanhe no Instagram
              </a>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <a href="">
                <SiGoogledocs />
                Trabalhe conosco
              </a>
            </li>
          </SwiperSlide>
        </Swiper>
      </ul>
    </nav>
  );
};

export default ImportantsLinks;
