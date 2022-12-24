import React from "react";
import "./blog-preview.css";
import { Typography } from "antd";
import { format } from "date-fns";

const { Title, Paragraph, Text } = Typography;

const BlogPreview = React.forwardRef(({ blog }, ref) => {
  const { author, title } = blog;
  return (
    <article ref={ref} className="cardpreview">
      <div className="content">
        <div className="author">
          <img
            src={import.meta.env.VITE_URL + "/" + author.img}
            height="28"
            width="28"
            alt={`${author.lastName} ${author.firstName}`}
          />
          <span>
            {author.lastName} {author.firstName}
          </span>
        </div>
        <Title level={3} className="title">
          {title}
        </Title>
        <Paragraph className="description">
          Will AI fully exit the realm of science fiction and begin to change
          everything?
        </Paragraph>
        <div className="footer">
          <Text className="publish-date">
            {format(new Date(blog.createdAt), "MMM d,Y")}
          </Text>
          <span> . </span>
          <Text className="time-read">9 min</Text>
          <span> . </span>
          <span>Programming</span>
        </div>
      </div>
      <div className="img">
        <img
          style={{ width: "200px" }}
          src="https://miro.medium.com/fit/c/275/184/1*6GivxXvvGzNflayMjZ0_XQ.jpeg"
          alt="img preview"
        />
      </div>
    </article>
  );
});

export default BlogPreview;
