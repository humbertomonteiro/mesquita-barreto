import styles from "./importantsLinks.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";

import { AiFillInstagram } from "react-icons/ai";

import { Link } from "react-router-dom";

import { areasActivity } from "../../../data/constants/activitys";

const ImportantsLinks = () => {
  const topPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav className={styles.container}>
      <ul className={styles.mobile}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
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
              <Link
                to="https://www.instagram.com/rafaewertonbarreto?igsh=eXZpZWNld3doMW0%3D"
                target="_blank"
              >
                <AiFillInstagram />
                Instagram
              </Link>
            </li>
          </SwiperSlide>
          {areasActivity.map((activity) => (
            <SwiperSlide>
              <li key={activity.path}>
                <Link onClick={topPage} to={activity.path}>
                  {activity.icon}
                  {activity.title}
                </Link>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </nav>
  );
};

export default ImportantsLinks;
