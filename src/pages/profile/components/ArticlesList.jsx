import { useEffect, useRef, useState, useCallback } from "react";
import useBlogs from "../hooks/useBlogs";
import Article from "./article/Article";

const ArticlesList = ({ userId }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, posts, hasMore } = useBlogs(pageNumber, userId);

  const observer = useRef();
  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("visible");
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <section className="substories">
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          return <Article key={post.id} ref={lastPostElementRef} post={post} />;
        } else {
          return <Article key={post.id} post={post} />;
        }
      })}
    </section>
  );
};

export default ArticlesList;

// why we use here ref as function because the value of ref change every time we scroll to the last element in array
