import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function Main() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then((data) => {
      setArticlesList(data);
      setIsLoading(false);
    });
  }, []);

  console.log(articlesList, ";ist<<<<<");

  if (isLoading) {
    return <h2 className="loading">...is loading</h2>;
  }

  return (
    <div>
      <h1>home</h1>
      {articlesList.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
