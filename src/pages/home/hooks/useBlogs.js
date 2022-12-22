import { useEffect, useState } from "react";
import { getBlogs } from "../../../api/Blog";

export default function useBlogs(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    getBlogs(pageNumber)
      .then((res) => {
        if (Object.keys(res.data).length === 0) return;
        let { _metadata, records } = res.data;

        setBlogs((prevBlogs) => {
          return [...prevBlogs, ...records];
        });

        const lastPage = Math.ceil(_metadata.total_count / _metadata.per_page);

        console.log("page : ", _metadata.page, "| lastpage : ", lastPage);

        setHasMore(_metadata.page < lastPage);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
  }, [pageNumber]);
  return { loading, error, blogs, hasMore };
}
