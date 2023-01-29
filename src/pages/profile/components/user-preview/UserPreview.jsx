import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { format } from "date-fns";
import { userAtom } from "../../atom/user";
import { getUser } from "../../../../api/User";

import * as S from "./styles";
import { Link } from "react-router-dom";

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
    <S.ProfileHeader>
      <S.HeaderTop>
        <S.Image
          src={`${import.meta.env.VITE_URL}/${user.img}`}
          width="128"
          height="128"
          alt="said"
        />
        <Link to="/settings">
          <S.Button type="primary" size="large">
            Edit profile
          </S.Button>
        </Link>
      </S.HeaderTop>
      <S.HeaderDetails>
        <S.Title level={2}>
          {user.firstName} {user.lastName}
        </S.Title>
        <S.Bio>{user.intro}</S.Bio>
        <S.Date>
          Joined on
          <time dateTime={user.registeredAt}>
            {format(new Date(user.registeredAt || Date.now()), " MMM d, y")}
          </time>
        </S.Date>
      </S.HeaderDetails>
    </S.ProfileHeader>
  );
};

export default UserPreview;
