import styles from "./title.module.css";

const Title = ({ text, as: Tag = "h2" }) => {
  return <Tag className={styles.title}>{text}</Tag>;
};

export default Title;
