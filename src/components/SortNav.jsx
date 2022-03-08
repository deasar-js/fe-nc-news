import { Link } from "react-router-dom";

export default function SortNav() {
  return (
    <>
      <div className="nav nav-tabs">
        <div className="row">
          <Link className="col" to="/search?=date">
            date
          </Link>
          <Link className="col" to="/search?=comment_count">
            comment_count
          </Link>
          <Link className="col" to="/search?=votes">
            votes
          </Link>
        </div>
      </div>
    </>
  );
}
