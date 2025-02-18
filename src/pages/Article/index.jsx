import styles from "./article.module.css";

import { articles } from "../../data/constants";

import { useParams } from "react-router-dom";
import Articles from "../Articles";

const Article = () => {
  const { id } = useParams();

  const getArticle = articles.filter((article) => article.id === +id);
  return (
    <div className={styles.container}>
      <article>{getArticle[0].content}</article>
      <Articles title="Veja outros conteúdos" />
    </div>
  );
};

export default Article;
