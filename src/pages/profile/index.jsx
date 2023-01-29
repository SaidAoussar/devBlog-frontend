import { useParams } from "react-router-dom";

import Container from "../../components/utils/Container";
import UserPreview from "./components/user-preview/UserPreview";
import SideBar from "./components/sidebar/Sidebar";
import ArticlesList from "./components/ArticlesList";
import styled from "styled-components";

function Profile() {
  const { id } = useParams();

  return (
    <Container>
      <UserPreview id={id} />
      <Content>
        <SideBar userId={id} />
        <main>
          <ArticlesList userId={id} />
        </main>
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
