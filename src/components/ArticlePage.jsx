import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchArticlesById,
  patchVotesById,
  fetchCommentsByArticleId,
} from "../utils/api";
import CommentCard from "./CommentCard";

export default function ArticlePage() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);
  const [comments, setComments] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesById(article_id).then((res) => {
      setArticle(res);
      setVoteCount(res.votes);
      setIsLoading(false);
    });
    fetchCommentsByArticleId(article_id).then((res) => {
      setComments(res);
    });
  }, [article_id]);

  const handleVoteClick = () => {
    setVoteCount((currentCount) => {
      return currentCount + 1;
    });
    patchVotesById(article_id).then((res) => {
      console.log(res);
    });
  };

  if (isLoading) {
    return <h3>...is loading</h3>;
  }

  return (
    <>
      <div className="article-card-wrapper my-4">
        <div className="col-md">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {article.author}
              </h6>
              <p>#{article.topic}</p>
              <p className="card-text">{article.body}</p>
              <div className="row">
                <p className="card-text col-md-4">
                  {article.comment_count} comments
                </p>
                <p className="card-text col-md-4">{voteCount} votes</p>
              </div>

              <button
                id="like"
                className="btn btn-primary my-4"
                onClick={() => {
                  handleVoteClick();
                }}
              >
                Vote
              </button>
              <footer className="blockquote-footer">
                {article.created_at}
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div className="comments-container">
        <h3>comments</h3>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </div>
    </>
  );
}
