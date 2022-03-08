import { useState, useEffect } from "react";
import { fetchArticlesByTopic } from "../utils/api";
import Topics from "./Topics";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

export default function TopicPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [articlesList, setArticlesList] = useState([]);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesByTopic(topic).then((res) => {
      setArticlesList(res);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return (
      <div class="text-center my-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Topics />
      <h3 className="my-2">#{topic}</h3>
      {articlesList.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
