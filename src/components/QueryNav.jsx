import { Link } from "react-router-dom";
import Topics from "./Topics";

export default function SortNav() {
  return (
    <>
      <div className="nav justify-content-center mt-5">
        <Topics />
        <div className="nav-item dropdown my-sm-0 mx-5">
          <span>sort by</span>
          <div className="dropdown-content">
            <ul className="no-bullets">
              <li>
                <Link className="col no-styling" to="?sort=created_at">
                  date
                </Link>
              </li>
              <li>
                <Link className="col no-styling" to="?sort=comment_count">
                  comment_count
                </Link>
              </li>
              <li>
                <Link className="col no-styling" to="?sort=votes">
                  votes
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-item dropdown mx-3">
          <span>order</span>
          <div className="dropdown-content">
            <ul className="no-bullets">
              <li>
                <Link className="col no-styling" to="?order=asc">
                  ascending
                </Link>
              </li>
              <li>
                <Link className="col no-styling" to="?order=desc">
                  descending
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
