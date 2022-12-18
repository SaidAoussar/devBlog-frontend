import { useEffect, useState } from "react";
import BlogCard from "../../components/utils/BlogCard";
import { Row, Col, Space, Spin, Alert } from "antd";
import { allBlogsOfUser } from "../../api/Blog";

function UserBlogs({ userId }) {
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus("pending");
    allBlogsOfUser(userId)
      .then((res) => {
        if (res.status === 200) {
          setBlogs(res.data);
          setStatus("resolved");
        }

        if (res.response?.status === 400) {
          throw res.response.data.message;
        }
      })
      .catch((e) => {
        setError(e);
        setStatus("rejected");
      });
  }, [userId]);
  return (
    <Row gutter={[16, 16]}>
      {status === "idle" && <p>Request idle</p>}
      {status === "pending" && (
        <Space style={{ width: "100%", justifyContent: "center" }}>
          <Spin size="large" />
        </Space>
      )}
      {status === "rejected" && <Alert message={error} type="error" />}
      {status === "resolved" &&
        blogs.map((blog) => {
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
