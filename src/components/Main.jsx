import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Topics from "./Topics";
import SortNav from "./SortNav";
import { useSearchParams } from "react-router-dom";

export default function Main() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState([]);
  const [order, setOrder] = useState([]);

  const [searchParams] = useSearchParams();
  const preSort = searchParams.get("sort");
  const preOrder = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    // work on params
    fetchArticles("votes").then((data) => {
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
