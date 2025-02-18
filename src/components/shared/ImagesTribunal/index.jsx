import { useState } from "react";
import styles from "./imagesTribunal.module.css";
import { LuZoomIn, LuX } from "react-icons/lu";
import { MdOutlineArrowRight, MdOutlineArrowLeft } from "react-icons/md";
import img1 from "../../../assets/imgs/bg-office.jpg";
import img2 from "../../../assets/imgs/office2.png";
import img3 from "../../../assets/imgs/office3.png";
import img4 from "../../../assets/imgs/office4.png";

const images = [img1, img2, img3, img4];

const ImagesTribunal = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <div className={styles.container}>
        {images.map((image, index) => (
          <div key={index} onClick={() => openImage(index)}>
            <LuZoomIn className={styles.icon} />
            <img src={image} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modal}>
          <button className={styles.close} onClick={closeModal}>
            <LuX />
          </button>
          <button className={styles.prev} onClick={prevImage}>
            <MdOutlineArrowLeft />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className={styles.modalImage}
          />
          <button className={styles.next} onClick={nextImage}>
            <MdOutlineArrowRight />
          </button>
        </div>
      )}
    </>
  );
};

export default ImagesTribunal;
