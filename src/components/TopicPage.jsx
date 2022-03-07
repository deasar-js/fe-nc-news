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
      console.log(res);
      setArticlesList(res);
      setIsLoading(false);
    });
  }, [topic]);

  console.log(articlesList);

  if (isLoading) {
    return <h3>...is loading</h3>;
  }

  return (
    <div>
      <Topics />
      <h3>#{topic}</h3>
      {articlesList.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
