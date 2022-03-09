import { removeCommentById } from "../utils/api";

export default function DeleteComment({ comment_id }) {
  const handleDelete = (e) => {
    e.preventDefault();
    removeCommentById(comment_id).then((res) => {
      console.log(res, "deletecommentComponent");
    });
  };

  return (
    <div>
      <h3>Are you sure you want to delete the comment</h3>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
