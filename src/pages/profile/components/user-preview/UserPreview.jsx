import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { Button, Typography } from "antd";
import { format } from "date-fns";
import { userAtom } from "../../store/user";
import { getUser } from "../../../../api/User";

import "./user-preview.css";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;
const UserPreview = ({ id }) => {
  const [user, setUser] = useAtom(userAtom);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus("pending");
    getUser(id)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
          setStatus("resolved");
        }

        if (res.response?.status === 400) {
          throw res.response.data.message;
        }
      })
      .catch((e) => {
        setError(e);
        setStatus("rejected");
      });
  }, [id]);
  return (
    <header className="profile-header">
      <div className="profile-header__top">
        <img
          src={`${import.meta.env.VITE_URL}/${user.img}`}
          width="128"
          height="128"
          alt="said"
        />
        <Link to="/settings">
          <Button type="primary" size="large">
            Edit profile
          </Button>
        </Link>
      </div>
      <div className="profile-header__details">
        <Title level={2} className="author-name">
          {user.firstName} {user.lastName}
        </Title>
        <Text className="author-bio">{user.intro}</Text>
        <Text className="author-date">
          Joined on
          <time dateTime={user.registeredAt}>
            {format(new Date(user.registeredAt || Date.now()), " MMM d, y")}
          </time>
        </Text>
      </div>
    </header>
  );
};

export default UserPreview;
