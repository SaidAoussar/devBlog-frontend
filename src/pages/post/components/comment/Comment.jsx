import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import * as S from "./styles";

import parse from "html-react-parser";

const Comment = forwardRef(({ comment }, ref) => {
  return (
    <S.Comment ref={ref}>
      <S.ImageLink to={`/profile/${comment.user?.id}`}>
        <S.Image
          src={`${import.meta.env.VITE_URL}/${comment.user?.img}`}
          alt="comment user image"
        />
      </S.ImageLink>
      <S.Content>
        <S.Header>
          <Link to={`/profile/${comment.user?.id}`}>
            <S.Button type="text">
              {comment.user?.firstName} {comment.user?.lastName}
            </S.Button>
          </Link>

          <S.SeparateDot>·</S.SeparateDot>
          <S.PublishDate>
            <time dateTime={comment.createdAt}>
              {format(new Date(comment.createdAt || Date.now()), "MMM d, y")}
            </time>
          </S.PublishDate>
        </S.Header>
        <S.Description>{parse(`${comment.content}`)}</S.Description>
      </S.Content>
    </S.Comment>
  );
});

export default Comment;
