import styles from "./article.module.css";
import SEO from "../../components/shared/SEO";

import { articles } from "../../data/constants/articles";

import { useParams } from "react-router-dom";
import Articles from "../Articles";

const Article = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === +id);

  return (
    <>
      <SEO
        title={`${article.title} | Mesquita Barreto Advocacia`}
        description={article.description}
        canonical={`/articles/${id}`}
      />
      <div className={styles.container}>
        <article>{article.content}</article>
        <Articles title="Veja outros conteúdos" />
      </div>
    </>
  );
};

export default Article;
