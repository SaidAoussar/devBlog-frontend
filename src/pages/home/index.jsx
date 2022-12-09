import { useEffect, useState } from "react";
import { getBlogs } from "../../api/Blog";
import BlogCard from "../../components/utils/BlogCard";
import { Col, Row, Layout, Alert, Spin, Space } from "antd";
import Container from "../../components/utils/Container";

import { Pagination } from "antd";

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
          const { items, ...info } = res.data;
          setBlogs(items);
          setBlogsInfo(info);
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
          const { items, ...info } = res.data;
          setBlogs(items);
          setBlogsInfo(info);
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
        <Content>
          <Container>
            {status === "idle" && <p>loading..</p>}
            {blogsInfo && (
              <Pagination
                current={blogsInfo.currentPage}
                total={blogsInfo.totalItem}
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

*/
