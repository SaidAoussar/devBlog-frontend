import { forwardRef } from "react";
import { Typography, Button } from "antd";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import parse from "html-react-parser";
const { Text, Paragraph } = Typography;

const Comment = forwardRef(({ comment }, ref) => {
  return (
    <div ref={ref} className="comment">
      <Link to={`/profile/${comment.user?.id}`} className="comment__author-img">
        <img src={`${import.meta.env.VITE_URL}/${comment.user?.img}`} alt="" />
      </Link>
      <div className="comment__content">
        <div className="comment__header">
          <Link to={`/profile/${comment.user?.id}`}>
            <Button type="text">
              {comment.user?.firstName} {comment.user?.lastName}
            </Button>
          </Link>

          <span className="separate-point">·</span>
          <Text className="comment__date">
            <time dateTime={comment.createdAt}>
              {format(new Date(comment.createdAt || Date.now()), "MMM d, y")}
            </time>
          </Text>
        </div>
        <Paragraph className="comment__body">
          {parse(`${comment.content}`)}
        </Paragraph>
      </div>
    </div>
  );
});

export default Comment;
