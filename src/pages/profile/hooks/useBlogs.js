import { useEffect, useState } from "react";
import { getBlogs } from "../../../api/Blog";

export default function useBlogs(pageNumber, authorId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    getBlogs(pageNumber, { author: authorId })
      .then((res) => {
        if (Object.keys(res.data).length === 0) return;
        let { _metadata, records } = res.data;

        setPosts((prevBlogs) => {
          return [
            ...new Map(
              [...prevBlogs, ...records].map((blog) => [blog["id"], blog])
            ).values(),
          ];
        });

        const lastPage = Math.ceil(_metadata.total_count / _metadata.per_page);

        setHasMore(_metadata.page < lastPage);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  }, [pageNumber, authorId]);
  return { loading, error, posts, hasMore };
}
