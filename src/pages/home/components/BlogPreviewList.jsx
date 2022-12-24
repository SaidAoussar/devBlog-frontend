import { useState, useRef, useCallback, Fragment } from "react";
import BlogPreview from "./blog-preview/BlogPreview";
import useBlogs from "../hooks/useBlogs";

const BlogPreviewList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, blogs, hasMore } = useBlogs(pageNumber);

  const observer = useRef();

  const lastBlogElementRef = useCallback(
    (node) => {
      console.log("render");
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
          return <BlogPreview ref={lastBlogElementRef} blog={blog} />;
        }
        return <BlogPreview blog={blog} />;
      })}
    </div>
  );
};

export default BlogPreviewList;
