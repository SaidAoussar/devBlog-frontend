import { useEffect, useState, useContext } from "react";
import {
  useParams,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Row, Col, Card, Space, Radio, Image } from "antd";
import Container from "./../utils/Container";
import { AppContext } from "../../context/AppContext";
import { getUser } from "../../api/User";

import UserBlogs from "./UserBlogs";
import CreateBlog from "./CreateBlog";
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
  const context = useContext(AppContext);
  const [userContext, setUserContext] = context.useUser;

  useEffect(() => {
    getUser(id)
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userContext]);

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
    </Container>
  );
}

export default Profile;
