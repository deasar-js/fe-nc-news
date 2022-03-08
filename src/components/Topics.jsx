import { fetchTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then((res) => {
      setIsLoading(true);
      setTopics(res);
      setIsLoading(false);
    });
  }, []);

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
    <div className="nav nav-tabs">
      <div className="row">
        <h4>topics</h4>
        {topics.map((topic) => {
          return (
            <div className="nav-item col">
              <Link to={`/topics/${topic.slug}`}>#{topic.slug}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
