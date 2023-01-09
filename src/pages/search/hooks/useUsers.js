import { useEffect, useState } from "react";
import { getUsers } from "../../../api/User";

export default function useUsers(pageNumber, q) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setUsers([]);
  }, [q]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getUsers(pageNumber, { q })
      .then((res) => {
        if (Object.keys(res.data).length === 0) return;
        let { _metadata, records } = res.data;

        console.log("res.data", res.data);

        setUsers((prevUsers) => {
          return [...prevUsers, ...records];
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
  return { loading, error, users, hasMore };
}
