export default function CommentCard({ comment }) {
  return (
    <div className="article-card-wrapper">
      <div className="col-md">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title">
              <strong>@{comment.author}</strong>
            </h6>
            <p className="card-text my-2">{comment.body}</p>
            <p>{comment.votes} votes</p>
            <footer className="blockquote-footer">{comment.created_at}</footer>
          </div>
        </div>
      </div>
    </div>
  );
}
