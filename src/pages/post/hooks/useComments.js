import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getComments } from "../../../api/Comment";
import { commentsAtom } from "../atom/comments";

export default function useComments(postId, pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [comments, setComments] = useAtom(commentsAtom);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    getComments(postId, pageNumber)
      .then((res) => {
        if (Object.keys(res.data).length === 0) return;
        let { _metadata, records } = res.data;
        console.log("comments before", comments);
        setComments((prevComments) => {
          return [
            ...new Map(
              [...prevComments, ...records].map((comment) => [
                comment["id"],
                comment,
              ])
            ).values(),
          ];
          //https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
          //return [...[...prevComments, ...records]];
        });

        console.log("comments after", [...new Set([...comments, ...records])]);

        const lastPage = Math.ceil(_metadata.total_count / _metadata.per_page);
        setHasMore(_metadata.page < lastPage);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  }, [pageNumber, postId, setComments]);

  return { comments, loading, hasMore, error };
}
