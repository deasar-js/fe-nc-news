import { useState } from "react";
import { postComment } from "../utils/api";

export default function NewComment({ setPosted, id }) {
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const [commentPosted, setCommentPosted] = useState();

  const handlePostComment = (e) => {
    e.preventDefault();
    postComment(id, {
      username: username,
      body: comment,
    }).then((res) => {
      setCommentPosted(res.comment_id);
      setUsername("");
      setComment("");
      setTimeout(() => {
        setPosted((preValue) => {
          return preValue + 1;
        });
      }, 2000);
    });
  };

  return (
    <div className="new-comment-container">
      {commentPosted !== undefined ? (
        <div className="alert alert-success my-2" role="alert">
          <p className="alert-heading">comment posted </p>{" "}
        </div>
      ) : (
        <div className="col-md">
          <div className="card mx-2 my-2">
            <form className="my-3 mx-4" onSubmit={handlePostComment}>
              <label htmlFor="username" className="my-1">
                @username
              </label>
              <br />
              <input
                id="username"
                className="my-2"
                type="text"
                value={username}
                placeholder="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
              <br />
              <label htmlFor="new-comment" className="my-1">
                write a comment
              </label>
              <br />
              <textarea
                id="new-comment"
                className="my-2"
                type="text"
                value={comment}
                style={{ height: "200px", width: "100%" }}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></textarea>
              <br />
              <button type="submit" className="btn btn-primary my-3">
                send comment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
