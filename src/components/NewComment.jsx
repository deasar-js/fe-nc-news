import { useState } from "react";

export default function NewComment() {
  const [comment, setComment] = useState("");

  return (
    <div className="new-comment-container">
      <div className="col-md">
        <div className="card my-2">
          <form className="my-2 mx-3">
            <label>write a comment</label>
            <br />
            <input type="text" value={comment}></input>
            <br />
            <button type="submit" className="btn btn-primary my-3">
              send comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
