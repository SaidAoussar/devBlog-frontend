import { useEffect, useState, useRef, useCallback } from "react";
import { Button, Typography } from "antd";

import Container from "../../components/utils/Container";
import homeIcon from "/public/img/home.svg";
import styled from "styled-components";
import readingListIcon from "/public/img/reading-list.svg";
import tagIcon from "/public/img/tag.svg";
import ArticleList from "./components/ArticleList";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  column-gap: 20px;
`;

const HomeSidebar = styled.aside``;
const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${(props) => props.theme.linkColor};
  border-radius: 6px;
  padding: 8px 16px;
  &:hover {
    color: ${(props) => props.theme.linkBrandedColorHover};
    background-color: ${(props) => props.theme.linkBgHover};
    text-decoration: underline;
  }

  span {
    margin-left: -12px;
    margin-right: 8px;
  }
`;

const HomeMain = styled.main`
  header nav ul {
    display: flex;
    gap: 16px;
  }
`;

const SecondaryNavLink = styled(Link)`
  font-size: 18px;
  color: ${(props) =>
    props.$active ? props.theme.base["100"] : props.theme.base["70"]};
  font-weight: ${(props) => (props.$active ? "700" : "normal")};
  padding: 8px 12px;
  border-radius: 6px;
  &:hover {
    color: ${(props) => props.theme.accentBrand};
    background-color: ${(props) => props.theme.base.inverted};
  }
`;

const Home = () => {
  return (
    <Container>
      <HomeContainer>
        <HomeSidebar>
          <nav>
            <ul>
              <li>
                <SidebarLink to="/">
                  <span>
                    <img src={homeIcon} alt="home icon" />
                  </span>
                  Home
                </SidebarLink>
              </li>
              <li>
                <SidebarLink to="readinglist">
                  <span>
                    <img src={readingListIcon} alt="reading list icon" />
                  </span>
                  Reading List
                </SidebarLink>
              </li>
              <li>
                <SidebarLink to="tags">
                  <span>
                    <img src={tagIcon} alt="tags icon" />
                  </span>
                  Tags
                </SidebarLink>
              </li>
            </ul>
          </nav>
        </HomeSidebar>
        <HomeMain>
          <header style={{ marginBottom: "12px" }}>
            <nav>
              <ul>
                <li>
                  <SecondaryNavLink $active={true} to="/latest">
                    Latest
                  </SecondaryNavLink>
                </li>
                {/* <li>
                  <SecondaryNavLink $active={false} to="/top">
                    Top
                  </SecondaryNavLink>
                </li> */}
              </ul>
            </nav>
          </header>
          <ArticleList />
        </HomeMain>
      </HomeContainer>
    </Container>
  );
};

export default Home;
/*
https://github.com/Rizwan17/reactjs-blog/

https://github.com/weihomechen/blog/

https://profy.dev/article/react-folder-structure

https://www.freecodecamp.org/news/fullstack-react-blog-app-with-express-and-psql/


 -- infinite scroll with reactjs:
 https://www.youtube.com/watch?v=NZKUirTtxcg
 https://www.youtube.com/watch?v=2IbRtjez6ag
 https://www.youtube.com/watch?v=JWlOcDus_rs



 https://www.youtube.com/watch?v=6ardZEhjvV0
*/
