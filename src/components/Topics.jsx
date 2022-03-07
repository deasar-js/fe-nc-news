import { fetchTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then((res) => {
      setIsLoading(true);
      console.log(res);
      setTopics(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h3>...is loading</h3>;
  }

  return (
    <div className="nav nav-tabs">
      <div className="row">
        <h1>topics</h1>
        {topics.map((topic) => {
          return (
            <div className="nav-item col">
              <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
