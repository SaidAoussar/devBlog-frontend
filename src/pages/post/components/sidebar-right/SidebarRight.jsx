import { format } from "date-fns";

import * as S from "./styles.js";

const SidebarRight = ({ author }) => {
  return (
    <S.SidebarRight>
      <S.SidebarRightInner>
        <S.Card>
          <S.Header>
            <S.Link to={`/profile/${author?.id}`}>
              <S.WrapperImage>
                <S.Image
                  src={`${import.meta.env.VITE_URL}/${author?.img}`}
                  alt="author image"
                />
              </S.WrapperImage>
              <S.SubTitle>
                {author?.firstName} {author?.lastName}
              </S.SubTitle>
            </S.Link>
          </S.Header>
          <S.Description>{author?.intro}</S.Description>
          <S.Details>
            <ul>
              <li>
                <S.Key>Joined</S.Key>
                <S.Value>
                  <time dateTime={author?.createdAt}>
                    {format(
                      new Date(author?.createdAt || Date.now()),
                      "MMM d, y"
                    )}
                  </time>
                </S.Value>
              </li>
            </ul>
          </S.Details>
        </S.Card>
      </S.SidebarRightInner>
    </S.SidebarRight>
  );
};

export default SidebarRight;
