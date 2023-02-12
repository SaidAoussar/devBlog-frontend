import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.bodyColor};
  background-color: ${(props) => props.theme.bodyBg};
`;

const Wrapper = styled.div``;

const Layout = () => {
  return (
    <>
      <LayoutWrapper>
        <Wrapper>
          <Navbar />
          <Outlet />
        </Wrapper>

        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default Layout;
// fixing the footer bottom
// https://stackoverflow.com/questions/4575826/how-to-push-a-footer-to-the-bottom-of-page-when-content-is-short-or-missing
