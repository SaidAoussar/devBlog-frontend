import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../../api/Blog";
import { getUser } from "../../api/User";
import Container from "../utils/Container";
import { Layout, Row, Col, Image, Tag } from "antd";

function Blog() {
  let params = useParams();
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    getBlog(params.id)
      .then((res) => {
        setBlog(res.data);
        getUser(res.data.author).then((res) => {
          setUser(res.data);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <Layout>
        <Container>
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
                  return myTags.map((myTag) => <Tag color="blue">{myTag}</Tag>);
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default Blog;
