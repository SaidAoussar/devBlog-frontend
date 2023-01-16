import { useCallback, useRef, useState } from "react";
import useComments from "../hooks/useComments";
import Comment from "./comment/Comment";

const CommentsList = ({ postId }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { comments, loading, hasMore, error } = useComments(postId, pageNumber);
  const observer = useRef();

  const lastElementCommentRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        console.log("hasMore :", hasMore);
        if (entries[0].isIntersecting && hasMore) {
          console.log("hi");
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <div className="comments_list">
      {comments.map((comment, index) => {
        if (comments.length === index + 1) {
          return (
            <Comment
              key={comment.id}
              ref={lastElementCommentRef}
              comment={comment}
            />
          );
        } else {
          return <Comment key={comment.id} comment={comment} />;
        }
      })}
    </div>
  );
};

export default CommentsList;
