import React from "react";
import { Button, Typography, Tag } from "antd";
import { format } from "date-fns";
import {
  HeartOutlined,
  MessageOutlined,
  BookOutlined,
} from "@ant-design/icons";
import "./article.css";

const { Title, Text } = Typography;
const Article = React.forwardRef(({ post }, ref) => {
  const { title, createdAt, author, tags } = post;
  return (
    <div ref={ref} className="story">
      <article className="story__body">
        <div className="story__top">
          <img
            className="story__author-pic"
            src={`${import.meta.env.VITE_URL}/${author.img}`}
            alt="said"
            width="34"
            height="34"
          />
          <div>
            <Title className="story__author-name" level={5}>
              {author.lastName} {author.firstName}
            </Title>
            <Text>
              <time dateTime={createdAt}>
                {format(new Date(createdAt), "MMM d, y")}
              </time>
            </Text>
          </div>
        </div>
        <div style={{ marginLeft: "44px" }}>
          <Title className="story__title" level={3}>
            {title}
          </Title>
          <div className="story__tags">
            {tags.map((t) => (
              <Text key={t.tag.id}>#{t.tag.name}</Text>
            ))}
          </div>
          <div className="story__bottom">
            <div className="story__details">
              <Text>
                <HeartOutlined style={{ marginRight: "8px" }} />
                <span>540 reactions</span>
              </Text>
              <Text>
                <MessageOutlined style={{ marginRight: "8px" }} />
                <span> 42 comments</span>
              </Text>
            </div>
            <div className="story__save">
              <Text style={{ fontSize: "12px", color: "rgb(82,82,82)" }}>
                9 min
              </Text>
              <Button className="bookmark" type="text" size="small">
                <BookOutlined style={{ fontSize: "16px" }} />
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
});

export default Article;
