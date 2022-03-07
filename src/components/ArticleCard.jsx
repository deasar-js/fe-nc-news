import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="article-card-wrapper">
      <div className="col-md">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{article.author}</h6>
            <p>#{article.topic}</p>
            <p className="card-text">{article.body.substring(0, 30) + "..."}</p>
            <Link to={`/post/${article.article_id}`}>read more</Link>
            <p className="card-text">{article.comment_count} comments</p>
            <p>{article.votes} votes</p>
            <footer className="blockquote-footer">{article.created_at}</footer>
          </div>
        </div>
      </div>
    </div>
  );
}
