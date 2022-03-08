import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Topics from "./Topics";
import SortNav from "./SortNav";

export default function Main() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // work on params
    fetchArticles("votes", "desc").then((data) => {
      setArticlesList(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2 className="loading">...is loading</h2>;
  }

  return (
    <div>
      <SortNav />
      <Topics />
      {articlesList.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
