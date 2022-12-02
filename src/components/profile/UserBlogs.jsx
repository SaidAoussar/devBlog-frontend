import { useEffect, useState } from "react";
import BlogCard from "../utils/BlogCard";
import { Row, Col } from "antd";
import { allBlogsOfUser } from "../../api/Blog";

function UserBlogs({ userId }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    allBlogsOfUser(userId)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <Row gutter={[16, 16]}>
      {blogs.map((blog) => {
        return (
          <Col xs={24} sm={12} md={8} lg={6} key={blog._id}>
            <BlogCard
              blog={blog}
              operation={true}
              userId={userId}
              setBlogs={setBlogs}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default UserBlogs;
