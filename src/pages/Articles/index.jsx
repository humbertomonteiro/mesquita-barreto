import styles from "./articles.module.css";
import { useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";

import Title from "../../components/shared/Title";
import BoxCTA from "../../components/shared/BoxCTA";
import { articles } from "../../data/constants";

import { IoIosSearch } from "react-icons/io";

const Articles = ({ title = "Artigos" }) => {
  const { id } = useParams();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  const itemsPerPage = id ? 4 : 12;

  let articlesFilter = articles;

  if (id) {
    articlesFilter = articlesFilter.filter((article) => article.id !== +id);
  }

  if (searchQuery) {
    articlesFilter = articlesFilter.filter(
      (article) =>
        article.title.toLowerCase().includes(searchQuery) ||
        article.description.toLowerCase().includes(searchQuery)
    );
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedArticles = articlesFilter.slice(startIndex, endIndex);

  const totalPages = Math.ceil(articlesFilter.length / itemsPerPage);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/articles?search=${encodeURIComponent(search)}`);
      setShowInputSearch(false);
      setSearch("");
    }
  };

  return (
    <>
      {
        <div className={styles.container}>
          <Title text={title} />

          {paginatedArticles.length > 0 ? (
            paginatedArticles.map((article) => (
              <div key={article.id} className={styles.articles}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <Link to={`/articles/${article.id}`}>Saiba mais</Link>
              </div>
            ))
          ) : (
            <div className={styles.noArticles}>
              <p>Nenhum resultado para: "{searchQuery}"</p>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Pesquise outro artigo..."
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  required
                />
                <button>
                  <IoIosSearch />
                </button>
              </form>
            </div>
          )}

          {totalPages > 1 && (
            <div className={styles.pagination}>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={currentPage === index + 1 ? styles.activePage : ""}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}

          <BoxCTA />
        </div>
      }
    </>
  );
};

export default Articles;
