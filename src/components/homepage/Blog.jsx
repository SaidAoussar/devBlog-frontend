import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../../api/Blog";
import { getUser } from "../../api/User";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";

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
      <Container>
        <Row className="justify-content-sm-center">
          <Col md={8} bg="secondary">
            <Image width="100%" src="https://via.placeholder.com/600x300" />
            <h5>{blog.title}</h5>
            <div>{new Date(blog.postTime).toLocaleString()}</div>
            <small style={{ fontWeight: "bold" }}>{user?.username}</small>
            <p>{blog.body}</p>
            <div>
              {blog.tags?.map((tag) => {
                const myTags = tag.split(", ");
                return myTags.map((myTag) => (
                  <Badge
                    className="py-2 px-4 ml-3"
                    style={{ marginLeft: "4px", marginBottom: "4px" }}
                  >
                    {myTag}
                  </Badge>
                ));
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
