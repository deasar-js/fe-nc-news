import { useState, useEffect } from "react";
import { patchVotesById } from "../utils/api";

export default function VoteHandler(article_id) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    patchVotesById(article_id).then((res) => {
      console.log(res, "<<<<<res");
    });
  }, [article_id]);
}
