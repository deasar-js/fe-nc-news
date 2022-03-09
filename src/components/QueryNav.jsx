import { Link } from "react-router-dom";

export default function SortNav() {
  return (
    <>
      <div className="nav justify-content-end my-2">
        <div className="row">
          sort:
          <Link className="col" to="/?sort=created_at">
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
      <div className="nav justify-content-end my-2">
        <div className="row">
          order:
          <Link className="col" to="/?order=asc">
            ascending
          </Link>
          <Link className="col" to="/?order=desc">
            descending
          </Link>
        </div>
      </div>
    </>
  );
}
