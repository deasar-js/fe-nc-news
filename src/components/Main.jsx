import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import QueryNav from "./QueryNav";
import { useSearchParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export default function Main() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const order = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(sort, order)
      .then((data) => {
        setArticlesList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [sort, order]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <QueryNav />
      {articlesList.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
