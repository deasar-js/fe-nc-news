import { useState, useEffect } from "react";
import { fetchArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import QueryNav from "./QueryNav";
import ErrorPage from "./ErrorPage";

export default function TopicPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [articlesList, setArticlesList] = useState([]);
  const [error, setError] = useState(null);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesByTopic(topic)
      .then((res) => {
        setArticlesList(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [topic]);

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
      <h5 className="mt-2 mx-2">{topic}</h5>
      {articlesList.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
