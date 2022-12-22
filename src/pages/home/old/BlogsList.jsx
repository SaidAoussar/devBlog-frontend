import { useState, useRef, useCallback } from "react";
import { Button, List, Space, Tag, Avatar } from "antd";
import useBlogs from "../hooks/useBlogs";

const BlogsList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, blogs, hasMore } = useBlogs(pageNumber);

  const observer = useRef();

  const lastBlogElementRef = useCallback(
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
    <div>
      {blogs.map((blog, index) => {
        if (blogs.length === index + 1) {
          return (
            <p ref={lastBlogElementRef}>
              {index} : {blog.title}
            </p>
          );
        } else {
          return (
            <p>
              {index} : {blog.title}
            </p>
          );
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  );
};

export default BlogsList;
