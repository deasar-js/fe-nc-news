import { useState, useContext } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "./contexts/UserContext";
import { Container, Form, Card, FormControl } from "react-bootstrap";

export default function NewComment({ setPosted, id }) {
  const [comment, setComment] = useState("");
  const [commentPosted, setCommentPosted] = useState();
  const [message, setMessage] = useState("");

  const { loggedInUser } = useContext(UserContext);

  const handlePostComment = (e) => {
    e.preventDefault();
    if (comment.length > 0) {
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
    } else {
      setMessage("hmm... comment is empty");
    }
  };

  return (
    <Container className="new-comment-container">
      {commentPosted !== undefined ? (
        <div className="alert alert-success my-2" role="alert">
          <p className="alert-heading">comment posted </p>{" "}
        </div>
      ) : (
        <Container>
          <Card className="border-0 my-2">
            <Form className="my-3 mx-4" onSubmit={handlePostComment}>
              <label className="my-1">hey,</label>
              <h6>@{loggedInUser.username}</h6>
              <label htmlFor="new-comment" className="card-text my-1">
                write a comment
              </label>
              <br />
              <Form.Control
                id="new-comment"
                as="textarea"
                rows={5}
                className="my-2"
                type="text"
                value={comment}
                style={{ height: "150px", width: "100%" }}
                placeholder=" what do you think?"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></Form.Control>
              <Container className="text-center">
                <button
                  id="pop-btn"
                  type="submit"
                  className="btn btn-primary mt-2"
                >
                  send comment
                </button>
                <div className="alert alert-light" role="alert">
                  {message}
                </div>
              </Container>
            </Form>
          </Card>
        </Container>
      )}
    </Container>
  );
}
