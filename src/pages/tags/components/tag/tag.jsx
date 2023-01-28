import { forwardRef } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const tag = forwardRef(({ tag }, ref) => {
  return (
    <S.Tag ref={ref}>
      <S.TitleLink to={`/t/${tag.id}`}>
        <S.Title level={3}>
          <S.Prefix>#</S.Prefix>
          {tag.name}
        </S.Title>
      </S.TitleLink>
      <S.Paragraph>{tag._count.posts} post</S.Paragraph>
    </S.Tag>
  );
});

export default tag;
