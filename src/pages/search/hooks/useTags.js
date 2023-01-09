import { useEffect, useState } from "react";
import { getTags } from "../../../api/Tag";

export default function useTags(pageNumber, q) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tags, setTags] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setTags([]);
  }, [q]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getTags({ page: pageNumber, q })
      .then((res) => {
        if (Object.keys(res.data).length === 0) return;
        let { _metadata, records } = res.data;

        console.log("res.data", res.data);

        setTags((prevTags) => {
          return [...prevTags, ...records];
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
  }, [pageNumber, q]);
  return { loading, error, tags, hasMore };
}
