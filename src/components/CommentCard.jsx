import { Link } from "react-router-dom";

export default function CommentCard({ comment }) {
  return (
    <div className="article-card-wrapper">
      <div className="col-md">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title">
              <strong>@{comment.author}</strong>
            </h6>
            <Link to={`/comment/${comment.comment_id}`}>
              <button type="button" id="comment-delete">
                test delete
              </button>
            </Link>
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
