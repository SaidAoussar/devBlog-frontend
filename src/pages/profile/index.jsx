import { useEffect, useState } from "react";
import {
  useParams,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Row, Col, Card, Space, Radio, Image, Spin, Alert } from "antd";
import Container from "../../components/utils/Container";
import { getUser } from "../../api/User";

import UserBlogs from "./UserBlogs";
import CreateBlog from "./CreateBlog";
// todo : should make edit blog to other page
import EditBlog from "./EditBlog";

import ModalEditProfile from "./ModalEditProfile";
import EditProfile from "./EditProfile";
import "./profile.module.css";

const { Meta } = Card;

function Profile() {
  const { id } = useParams();
  const location = useLocation();

  const [user, setUser] = useState({});
  const [content, setContent] = useState("allBlogs"); // allBlogs / createBlog
  const [isEditPgae, setIsEditPage] = useState(false);
  const navigate = useNavigate();

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus("pending");
    getUser(id)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
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
  }, []);

  useEffect(() => {
    const routePath = location.pathname.split("/").at(-1);
    if (routePath !== "edit") {
      navigate(content);
      setIsEditPage(false);
    } else {
      setIsEditPage(true);
    }
  }, [content, navigate]);

  return (
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
        <>
          <Row>
            <Col span={24}>
              <Card
                title="Profile"
                extra={
                  <ModalEditProfile>
                    <EditProfile />
                  </ModalEditProfile>
                }
              >
                <Space
                  direction="vertical"
                  align="center"
                  style={{ width: "100%" }}
                >
                  <Image
                    width="170px"
                    height="170px"
                    src={import.meta.env.VITE_URL + "/" + user.photo}
                  ></Image>
                  <Meta title={user.username} description={user.email} />
                </Space>
              </Card>
            </Col>
          </Row>
          {!isEditPgae && (
            <Row className="my-4">
              <Radio.Group
                value={content}
                onChange={(e) => setContent(e.target.value)}
                optionType="button"
                buttonStyle="solid"
              >
                <Radio.Button value="allBlogs">All Blogs</Radio.Button>
                <Radio.Button value="createBlog">Create Blog</Radio.Button>
              </Radio.Group>
            </Row>
          )}
          <Row className="mt-4 mb-5" justify="center">
            <Routes>
              <Route path="/allBlogs" element={<UserBlogs userId={id} />} />
              <Route
                path="/blogs/:blogid/edit"
                element={<EditBlog userId={id} />}
              />
              <Route path="/createBlog" element={<CreateBlog userId={id} />} />
            </Routes>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Profile;
