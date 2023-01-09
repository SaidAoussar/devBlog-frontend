import { forwardRef, useRef, useCallback } from "react";
import { Typography } from "antd";
import "./users-filter.css";
import useUsers from "../../../hooks/useUsers";
import { useAtom } from "jotai";
import { pageNumberAtom } from "../../../store/page-number";

const { Title, Text } = Typography;
function UsersFilter({ q }) {
  const [pageNumber, setPageNumber] = useAtom(pageNumberAtom);
  const { loading, users, error, hasMore } = useUsers(pageNumber, q);

  const observer = useRef();
  const lastUserElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, setPageNumber]
  );
  return (
    <div className="users-filter">
      {users.map((user, index) => {
        if (users.length === index + 1) {
          return <User key={user.id} ref={lastUserElementRef} user={user} />;
        } else {
          return <User key={user.id} user={user} />;
        }
      })}
    </div>
  );
}

const User = forwardRef(({ user }, ref) => {
  return (
    <div ref={ref} className="user">
      <a href="#">
        <img
          src={`${import.meta.env.VITE_URL}/${user.img}`}
          alt=""
          height={32}
          width={32}
        />
      </a>
      <div className="user__details">
        <Title level={4}>
          {user.firstName} {user.lastName}
        </Title>
        <Text>{user.username}</Text>
      </div>
    </div>
  );
});

export default UsersFilter;
