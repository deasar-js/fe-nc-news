import { removeCommentById } from "../utils/api";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DeleteComment() {
  const [deleted, setDeleted] = useState();

  const { comment_id } = useParams();

  console.log(comment_id, "<<<id");

  const handleDelete = (e) => {
    e.preventDefault();
    removeCommentById(comment_id).then((res) => {
      console.log(res.status);
      setDeleted(res.status);
    });
  };

  console.log(deleted, "<<< deleted");

  return (
    <div className="delete-container">
      <Link to="/">return home</Link>
      {deleted !== undefined ? (
        <div className="alert alert-success my-2" role="alert">
          <p className="alert-heading">comment deleted </p>{" "}
        </div>
      ) : (
        <div>
          <h3>Are you sure you want to delete the comment</h3>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
