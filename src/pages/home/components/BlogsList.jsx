import { useState, useRef, useCallback } from "react";
import { Button, List, Space, Tag, Avatar } from "antd";
import useBlogs from "../hooks/useBlogs";

const BlogsList = () => {
  const [pageNumber, setPageNumber] = useState();
  const { blogs, loading, error, hasMore } = useBlogs(pageNumber);
  return <div></div>;
};

export default BlogsList;
