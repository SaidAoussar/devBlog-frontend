import { CommentOutlined } from "@ant-design/icons";
import { Reaction } from "../sidebar-left/styles";

export const CommentIcon = ({ commentsCount }) => {
  return (
    <Reaction>
      <CommentOutlined />
      <span>{commentsCount}</span>
    </Reaction>
  );
};

export default CommentIcon;
