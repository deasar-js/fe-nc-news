import { useState, useContext } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "./contexts/UserContext";

export default function NewComment({ setPosted, id }) {
  const [comment, setComment] = useState("");
  const [commentPosted, setCommentPosted] = useState();

  const { loggedInUser } = useContext(UserContext);

  const handlePostComment = (e) => {
    e.preventDefault();
    postComment(id, {
      username: loggedInUser.username,
      body: comment,
    }).then((res) => {
      setCommentPosted(res.comment_id);
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
              <label className="my-1">hey,</label>
              <h6>@{loggedInUser.username}</h6>
              <label htmlFor="new-comment" className="my-1">
                write a comment
              </label>
              <br />
              <textarea
                id="new-comment"
                className="my-2"
                type="text"
                value={comment}
                style={{ height: "150px", width: "100%" }}
                placeholder=" what do you think?"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></textarea>
              <br />
              <button id="pop-btn" type="submit" className="btn btn-primary">
                send comment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
