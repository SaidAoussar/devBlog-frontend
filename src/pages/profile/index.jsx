import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";

import { getUserByUsername } from "../../api/User";

import { userAtom } from "./atom/user";
import Container from "../../components/utils/Container";
import UserPreview from "./components/user-preview/UserPreview";
import SideBar from "./components/sidebar/Sidebar";
import ArticlesList from "./components/ArticlesList";
import styled from "styled-components";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useAtom(userAtom);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  useEffect(() => {
    setStatus("pending");
    getUserByUsername(username)
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
  }, [username]);

  return (
    <Container>
      <UserPreview user={user} />
      <Content>
        <SideBar />
        <main>{user.id && <ArticlesList userId={user.id} />}</main>
      </Content>
    </Container>
  );
}

const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 12px;
`;

export default Profile;
