import { Link } from "react-router-dom";
import Topics from "./Topics";

export default function SortNav() {
  return (
    <>
      <div className="nav justify-content-end my-2">
        <div className="row">
          <div className="dropdown col mx-3">
            <span>sort by</span>
            <div className="dropdown-content">
              <ul className="no-bullets">
                <li>
                  <Link className="col" to="/?sort=created_at">
                    date
                  </Link>
                </li>
                <li>
                  <Link className="col" to="/?sort=comment_count">
                    comment_count
                  </Link>
                </li>
                <li>
                  <Link className="col" to="/?sort=votes">
                    votes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="dropdown">
            <span>order</span>
            <div className="dropdown-content">
              <ul className="no-bullets">
                <li>
                  <Link className="col" to="/?order=asc">
                    ascending
                  </Link>
                </li>
                <li>
                  <Link className="col" to="/?order=desc">
                    descending
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Topics />
      </div>
    </>
  );
}
