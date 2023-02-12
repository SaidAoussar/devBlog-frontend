import { format } from "date-fns";
import { useUserStore } from "../../../../store/user";
import userImage from "/public/img/user.png";

import * as S from "./styles";
import { Link } from "react-router-dom";

const UserPreview = ({ user }) => {
  const authUser = useUserStore((state) => state.user);

  return (
    <S.ProfileHeader>
      <S.HeaderTop>
        <S.Image
          src={user.img ? `${import.meta.env.VITE_URL}/${user.img}` : userImage}
          width="128"
          height="128"
          alt="said"
        />
        {authUser.id === user.id && (
          <Link to="/settings">
            <S.Button type="primary" size="large">
              Edit profile
            </S.Button>
          </Link>
        )}
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
