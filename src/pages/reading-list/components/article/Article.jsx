import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import * as S from "./styles";

import { format } from "date-fns";
import { Fragment } from "react";
const { Title, Text } = Typography;

const Article = ({ post, onDelete }) => {
  return (
    <S.Card>
      <S.CardWrapper>
        <Link to={`/profile/${post.author?.id}`} style={{ display: "block" }}>
          <S.CardImage
            src={`${import.meta.env.VITE_URL}/${post.author?.img}`}
            height={32}
            width={32}
            alt=""
          />
        </Link>
        <S.CardContent>
          <S.CardTitle to={`/post/${post.id}`}>
            <S.Title level={4}>{post.title}</S.Title>
          </S.CardTitle>

          <S.CardDetails>
            <Link to={`/profile/${post.author?.id}`}>
              <S.Text>
                {post.author?.firstName} {post.author?.lastName}
              </S.Text>
            </Link>
            <S.Dot> • </S.Dot>
            <S.Time dateTime={post.createdAt}>
              {format(new Date(post.createdAt || Date.now()), "MMM d,y")}
            </S.Time>

            <span className="tags">
              {post.tags?.map((t) => {
                return (
                  <Fragment key={t.tag.id}>
                    <S.Dot> • </S.Dot>
                    <S.Tag to={`/t/${t.tag.id}`}>{t.tag.name}</S.Tag>
                  </Fragment>
                );
              })}
            </span>
          </S.CardDetails>
        </S.CardContent>
      </S.CardWrapper>
      <Button
        size="large"
        type="link"
        danger
        onClick={() => onDelete(post.saveId)}
      >
        Remove
      </Button>
    </S.Card>
  );
};

export default Article;
