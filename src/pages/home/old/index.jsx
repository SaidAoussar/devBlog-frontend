import { useEffect, useState } from "react";
import { getBlogs } from "../../api/Blog";
import BlogCard from "../../components/utils/BlogCard";
import { Col, Row, Layout, Alert, Spin, Space } from "antd";
import Container from "../../components/utils/Container";

import { Pagination } from "antd";
import Intro from "./components/Intro";

const { Content } = Layout;

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsInfo, setBlogsInfo] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");
    getBlogs()
      .then((res) => {
        if (res.data) {
          const { records, _metadata } = res.data;
          setBlogs(records);
          setBlogsInfo(_metadata);
          setStatus("resolved");
        }

        if (res.name === "Error") {
          throw res.message;
        }
      })
      .catch((e) => {
        setError(e);
        setStatus("rejected");
      });
  }, []);

  const handlePagination = (page) => {
    setStatus("pending");
    getBlogs(page)
      .then((res) => {
        if (res.data) {
          const { records, _metadata } = res.data;
          setBlogs(records);
          setBlogsInfo(_metadata);
          setStatus("resolved");
        }
        if (res.name === "Error") {
          throw res.message;
        }
      })
      .catch((e) => {
        setError(e);
        setStatus("rejected");
      });
  };
  return (
    <div>
      <Layout>
        <Intro />
        <Content>
          <Container>
            {status === "idle" && <p>loading..</p>}
            {blogsInfo && (
              <Pagination
                current={blogsInfo.page}
                total={blogsInfo.total_count}
                onChange={handlePagination}
                showSizeChanger={false}
                style={{ marginTop: "20px", marginBottom: "20px" }}
              />
            )}
            {status === "pending" && (
              <Space style={{ width: "100%", justifyContent: "center" }}>
                <Spin size="large" />
              </Space>
            )}
            {status === "rejected" && <Alert message={error} type="error" />}
            {status === "resolved" && (
              <Row gutter={[16, 16]}>
                {blogs && (
                  <>
                    {blogs.map((blog) => (
                      <Col xs={24} sm={12} md={8} lg={6} key={blog._id}>
                        <BlogCard blog={blog} />
                      </Col>
                    ))}
                  </>
                )}
              </Row>
            )}
          </Container>
        </Content>
      </Layout>
    </div>
  );
};

export default Home;
/*
https://github.com/Rizwan17/reactjs-blog/

https://github.com/weihomechen/blog/

https://profy.dev/article/react-folder-structure

https://www.freecodecamp.org/news/fullstack-react-blog-app-with-express-and-psql/


 -- infinite scroll with reactjs:
 https://www.youtube.com/watch?v=NZKUirTtxcg
 https://www.youtube.com/watch?v=2IbRtjez6ag



 https://www.youtube.com/watch?v=6ardZEhjvV0
*/