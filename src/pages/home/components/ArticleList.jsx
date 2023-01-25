import { useCallback, useRef, useState } from "react";
import useBlogs from "../hooks/useBlogs";
import PreviewPost from "../../../components/preview-post/PreviewPost";
const ArticleList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, posts, hasMore } = useBlogs(pageNumber);
  const observer = useRef();

  const lastElementPostRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <div className="substories">
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          return (
            <PreviewPost key={post.id} ref={lastElementPostRef} post={post} />
          );
        } else {
          return <PreviewPost key={post.id} post={post} />;
        }
      })}
    </div>
  );
};

export default ArticleList;
