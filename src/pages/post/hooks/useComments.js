import { useEffect, useState } from "react";
import { getComments } from "../../../api/Comment";

export default function useComments(postId, pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [comments, setComments] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    getComments(postId, pageNumber)
      .then((res) => {
        if (Object.keys(res.data).length === 0) return;
        let { _metadata, records } = res.data;
        setComments((prevComments) => [...prevComments, ...records]);

        const lastPage = Math.ceil(_metadata.total_count / _metadata.per_page);
        setHasMore(_metadata.page < lastPage);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  }, [pageNumber, postId]);

  return { comments, loading, hasMore, error };
}
