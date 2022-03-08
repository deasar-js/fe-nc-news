import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchArticlesById,
  patchVotesById,
  fetchCommentsByArticleId,
} from "../utils/api";
import CommentCard from "./CommentCard";

import NewComment from "./NewComment";
import ErrorPage from "./ErrorPage";

export default function ArticlePage() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);
  const [comments, setComments] = useState([]);

  const [postComment, setPostComment] = useState(null);
  const [posted, setPosted] = useState(0);

  const [error, setError] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesById(article_id)
      .then((res) => {
        setArticle(res);
        setVoteCount(res.votes);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      });
    fetchCommentsByArticleId(article_id).then((res) => {
      setComments(res);
      setPostComment(null);
    });
  }, [article_id, posted]);

  const handleVoteClick = () => {
    setVoteCount((currentCount) => {
      return currentCount + 1;
    });
    patchVotesById(article_id).then((res) => {
      console.log(res);
    });
  };

  const handlePostCommentClick = () => {
    setPostComment(true);
  };

  if (error) {
    return <ErrorPage message={error} />;
  }

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
      {postComment ? (
        <NewComment setPosted={setPosted} id={article_id} />
      ) : (
        <button
          className="btn btn-primary my-2"
          onClick={() => handlePostCommentClick()}
        >
          post a comment
        </button>
      )}
      <div className="comments-container my-3">
        <h3>comments</h3>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </div>
    </>
  );
}
