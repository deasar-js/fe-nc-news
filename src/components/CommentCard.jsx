import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export default function CommentCard({ comment }) {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="article-card-wrapper">
      <div className="col-md">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <h6 className="card-title col">
                <strong>@{comment.author}</strong>
              </h6>
              {loggedInUser.username === comment.author ? (
                <div className="col-2">
                  <Link to={`/comment/${comment.comment_id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
            <p className="card-text my-2">{comment.body}</p>
            <p>{comment.votes} votes</p>
            <footer className="blockquote-footer">
              {Date(comment.created_at)}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
