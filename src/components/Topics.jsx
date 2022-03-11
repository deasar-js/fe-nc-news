import { fetchTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTopics()
      .then((res) => {
        setTopics(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div className="nav-item dropdown mx-3">
      <span>topics</span>
      <div className="dropdown-content">
        <ul className="no-bullets">
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link className="no-styling" to={`/topics/${topic.slug}`}>
                  {topic.slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
