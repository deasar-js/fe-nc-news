import { Link } from "react-router-dom";

export default function SortNav() {
  return (
    <>
      <div className="nav nav-tabs">
        <div className="row">
          <Link className="col" to="/?sort=date">
            date
          </Link>
          <Link className="col" to="/?sort=comment_count">
            comment_count
          </Link>
          <Link className="col" to="/?sort=votes">
            votes
          </Link>
        </div>
      </div>
    </>
  );
}
