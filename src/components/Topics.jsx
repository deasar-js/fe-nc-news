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
    <div className="nav-item dropdown col-lg-2">
      <button
        className="drop btn btn-primary btn-sml dropdown-toggle"
        href="#"
        id="navbarDropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        topics
      </button>
      <div className="dropdown-content">
        <ul className="no-bullets">
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>#{topic.slug}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
