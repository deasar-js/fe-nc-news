import { fetchTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((res) => {
      setTopics(res);
    });
  }, []);

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
