import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import "./tag.css";
const { Title, Paragraph } = Typography;
const tag = forwardRef(({ tag }, ref) => {
  return (
    <div ref={ref} className="tag">
      <Title level={3}>
        <Link to={`/t/${tag.id}`} className="tag__name">
          <span className="tag__prefix">#</span>
          {tag.name}
        </Link>
      </Title>
      <Paragraph>{tag._count.posts} post</Paragraph>
    </div>
  );
});

export default tag;
