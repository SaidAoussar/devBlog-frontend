import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import Container from "../../components/utils/Container";
import { getUser } from "../../api/User";
import "./profile.module.css";
import { useUserStore } from "../../store/user";
import UserPreview from "./components/user-preview/UserPreview";
import SideBar from "./components/sidebar/Sidebar";
import ArticlesList from "./components/ArticlesList";

function Profile() {
  const { id } = useParams();
  const location = useLocation();

  const [user, setUser] = useState({});
  const authUser = useUserStore((state) => state.user);
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
  }, [id]);

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
      <UserPreview />
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          columnGap: "12px",
        }}
      >
        <SideBar />
        <main className="content">
          <ArticlesList />
        </main>
      </section>
    </Container>
  );
}

export default Profile;
