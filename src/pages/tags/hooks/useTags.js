import { useEffect, useState } from "react";
import { getTags } from "../../../api/Tag";

export default function useTags(pageNumber, q) {
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setTags([]);
  }, [q]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getTags({
      page: pageNumber,
      q: q,
    })
      .then((res) => {
        const { _metadata, records } = res.data;
        setTags((prevTags) => {
          return [
            ...new Map(
              [...prevTags, ...records].map((tag) => [tag["id"], tag])
            ).values(),
          ];
        });
        const lastPage = Math.ceil(_metadata.total_count / _metadata.per_page);
        setHasMore(_metadata.page < lastPage);

        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [pageNumber, q]);

  return { loading, tags, error, hasMore };
}
