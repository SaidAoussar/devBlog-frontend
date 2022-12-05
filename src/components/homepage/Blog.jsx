import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../../api/Blog";
import { getUser } from "../../api/User";
import Container from "../utils/Container";
import { Layout, Row, Col, Image, Tag, Space, Spin, Alert } from "antd";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState({});
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus("pending");
    getBlog(id)
      .then((res) => {
        if (res.status === 200) {
          setBlog(res.data);
          getUser(res.data.author).then((res) => {
            setUser(res.data);
          });
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
  }, [id]);

  return (
    <div>
      <Layout>
        <Container>
          {status === "pending" && (
            <Space
              style={{
                width: "100%",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <Spin size="large" />
            </Space>
          )}

          {status === "rejected" && <Alert message={error} type="error" />}
          {status === "resolved" && (
            <Row justify={"center"}>
              <Col md={14}>
                <Image width="100%" src="https://via.placeholder.com/600x300" />
                <h5>{blog.title}</h5>
                <div>{new Date(blog.postTime).toLocaleString()}</div>
                <small style={{ fontWeight: "bold" }}>{user?.username}</small>
                <p>{blog.body}</p>
                <div>
                  {blog.tags?.map((tag) => {
                    const myTags = tag.split(", ");
                    return myTags.map((myTag) => (
                      <Tag color="blue">{myTag}</Tag>
                    ));
                  })}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </Layout>
    </div>
  );
}

export default Blog;
