import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import Container from "../../components/utils/Container";
import "./profile.module.css";
import UserPreview from "./components/user-preview/UserPreview";
import SideBar from "./components/sidebar/Sidebar";
import ArticlesList from "./components/ArticlesList";

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  return (
    <Container>
      <UserPreview id={id} />
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          columnGap: "12px",
        }}
      >
        <SideBar userId={id} />
        <main className="content">
          <ArticlesList userId={id} />
        </main>
      </section>
    </Container>
  );
}

export default Profile;
