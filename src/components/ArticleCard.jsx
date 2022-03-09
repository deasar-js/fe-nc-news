import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="article-card-wrapper">
      <div className="col-md my-3 mx-2">
        <div className="card">
          <div className="card-body mx-1 my-1">
            <h5 className="card-title">{article.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{article.author}</h6>
            <p>#{article.topic}</p>
            <p className="card-text">{article.body.substring(0, 30) + "..."}</p>
            <Link className="read-more" to={`/post/${article.article_id}`}>
              read more
            </Link>
            <div className="row my-3">
              <p className="card-text col">{article.comment_count} comments</p>
              <p className="card-text col">{article.votes} votes</p>
            </div>
            <footer className="blockquote-footer my-0">
              {article.created_at}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
