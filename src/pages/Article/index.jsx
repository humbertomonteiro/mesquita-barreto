import styles from "./article.module.css";

import { articles } from "../../data/constants/articles";

import { useParams } from "react-router-dom";
import Articles from "../Articles";

const Article = () => {
  const { id } = useParams();

  // Aceita tanto o slug (URL nova, ex: /articles/divida-com-governo-prescreve)
  // quanto o id numérico (URL antiga, ex: /articles/1), para não quebrar
  // links já existentes ou já indexados pelo Google.
  const getArticle = articles.filter(
    (article) => article.slug === id || article.id === +id
  );

  return (
    <div className={styles.container}>
      <article>{getArticle[0].content}</article>
      <Articles title="Veja outros conteúdos" />
    </div>
  );
};

export default Article;
