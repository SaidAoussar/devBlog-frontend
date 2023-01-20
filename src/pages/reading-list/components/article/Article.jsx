import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import styled from "styled-components";
import { format } from "date-fns";
const { Title, Text } = Typography;

const Article = ({ post, onDelete }) => {
  return (
    <Card>
      <CardWrapper>
        <CardImage>
          <img
            src={`${import.meta.env.VITE_URL}/${post.author?.img}`}
            height={32}
            width={32}
            alt=""
          />
        </CardImage>
        <CardContent>
          <CardTitle>
            <Title level={4}>{post.title}</Title>
          </CardTitle>

          <CardDetails>
            <Link className="link">
              <Text>
                {post.author?.firstName} {post.author?.lastName}
              </Text>
            </Link>
            <span className="dot"> • </span>
            <time dateTime={post.createdAt}>
              {format(new Date(post.createdAt || Date.now()), "MMM d,y")}
            </time>
            <span className="dot"> • </span>
            <span className="tags">
              {post.tags?.map((t) => {
                return (
                  <Link key={t.tag.id} className="tag">
                    {t.tag.name}
                  </Link>
                );
              })}
            </span>
          </CardDetails>
        </CardContent>
      </CardWrapper>
      <Button
        size="large"
        type="link"
        danger
        onClick={() => onDelete(post.saveId)}
      >
        Remove
      </Button>
    </Card>
  );
};

const Card = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 8px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 10px;
`;

const CardImage = styled.div`
  img {
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const CardContent = styled.div``;

const CardTitle = styled(Link)`
  h4 {
    line-height: 1.25;
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
`;

const CardDetails = styled.div`
  .link span {
    font-size: 14px;
    color: rgb(64, 64, 64);
    font-weight: 500;
  }
  .dot {
    color: #bdbdbd;
  }

  time {
    font-size: 14px;
    color: #717171;
  }

  .tag {
    display: inline-block;
    font-size: 14px;
    color: rgb(64, 64, 64);
    padding: 6px 8px;
    border-radius: 6px;
    text-decoration: none;
  }
  .tag:hover {
    color: rgb(23, 23, 23);
    background-color: rgba(23, 23, 23, 0.05);
    box-shadow: inset 0 0 0 1px rgba(23, 23, 23, 0.05),
      inset 0 0 0 1px rgba(23, 23, 23, 0.05),
      inset 0 0 0 1px rgba(23, 23, 23, 0.05);
  }
`;

export default Article;
