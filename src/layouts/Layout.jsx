import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

const LayoutWrapper = styled.div`
  color: ${(props) => props.theme.bodyColor};
  background-color: ${(props) => props.theme.bodyBg};
`;

const Layout = () => {
  return (
    <>
      <LayoutWrapper>
        <Navbar />
        <Outlet />
        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default Layout;
