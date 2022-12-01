import { useEffect, useState } from "react";
import { getBlogs } from "../../api/Blog";
import BlogCard from "../utils/BlogCard";
import { Col, Row, Layout } from "antd";
import Container from "../utils/Container";

import { Pagination } from "antd";

const { Content } = Layout;

function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [blogsInfo, setBlogsInfo] = useState({});

  useEffect(() => {
    getBlogs()
      .then((res) => {
        const { items, ...info } = res.data;
        setBlogs(items);
        setBlogsInfo(info);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handlePagination = (page) => {
    getBlogs(page)
      .then((res) => {
        const { items, ...info } = res.data;
        console.log(info);
        setBlogs(items);
        setBlogsInfo(info);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <Layout>
        <Content>
          <Container>
            <Pagination
              current={blogsInfo.currentPage}
              total={blogsInfo.totalItem}
              onChange={handlePagination}
              showSizeChanger={false}
              style={{ marginTop: "20px", marginBottom: "20px" }}
            />

            <Row gutter={[16, 16]}>
              {blogs && (
                <>
                  {blogs.map((blog) => (
                    <Col xs={24} sm={12} md={8} lg={6}>
                      <BlogCard blog={blog} />
                    </Col>
                  ))}
                </>
              )}
            </Row>
          </Container>
        </Content>
      </Layout>
    </div>
  );
}

export default HomePage;
