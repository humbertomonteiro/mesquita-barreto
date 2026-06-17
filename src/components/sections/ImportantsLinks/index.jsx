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
      <div className={styles.mobile}>
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
            <div className={styles.item}>
              <Link
                to="https://www.instagram.com/rafaewertonbarreto?igsh=eXZpZWNld3doMW0%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Rafael Ewerton Barreto Advogado"
              >
                <AiFillInstagram />
                Instagram
              </Link>
            </div>
          </SwiperSlide>
          {areasActivity.map((activity) => (
            <SwiperSlide key={activity.path}>
              <div className={styles.item}>
                <Link onClick={topPage} to={activity.path}>
                  {activity.icon}
                  {activity.title}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </nav>
  );
};

export default ImportantsLinks;
