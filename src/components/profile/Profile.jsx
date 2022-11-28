import { useEffect, useState, useContext } from "react";
import { useParams, NavLink, Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { getUser } from "../../api/User";

import UserBlogs from "./UserBlogs";
import CreateBlog from "./CreateBlog";
import EditBlog from "./EditBlog";
import ModalEditProfile from "./ModalEditProfile";
import EditProfile from "./EditProfile";
import "./profile.module.css";

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const context = useContext(AppContext);
  const [userContext, setUserContext] = context.useUser;

  useEffect(() => {
    getUser(id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userContext]);
  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <ModalEditProfile>
                <EditProfile />
              </ModalEditProfile>
            </Card.Header>
            <Card.Body>
              <div className="text-center">
                <Image
                  width="170px"
                  height="170px"
                  src={
                    import.meta.env.VITE_URL +
                    "/" +
                    user.photo +
                    "?v=" +
                    Date.now()
                  }
                ></Image>
              </div>
              <Card.Title className="text-center mt-3">
                {user.username}
              </Card.Title>
              <Card.Text className="text-center mt-3">{user.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <NavLink
            to="blogs"
            className={({ isActive }) => {
              return "btn d-block btn-" + (isActive ? "primary" : "secondary");
            }}
          >
            All Bogs
          </NavLink>
        </Col>
        <Col>
          <NavLink
            to="create"
            className={({ isActive }) => {
              return "btn d-block btn-" + (isActive ? "primary" : "secondary");
            }}
          >
            create Bogs
          </NavLink>
        </Col>
      </Row>
      <Row className="mt-4 mb-5 justify-content-md-center">
        <Routes>
          <Route path="/blogs" element={<UserBlogs userId={id} />} />
          <Route
            path="/blogs/:blogid/edit"
            element={<EditBlog userId={id} />}
          />
          <Route path="/create" element={<CreateBlog userId={id} />} />
        </Routes>
      </Row>
    </Container>
  );
}

export default Profile;
