import { Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes/light";
import { DarkTheme } from "../themes/dark";
import Footer from "./Footer";
import Nav from "./navbar/Nav";
import Navbar from "./navbar/Navbar";
import { useDarkModeStore } from "../store/dark-mode";

const LayoutWrapper = styled.div`
  color: ${(props) => props.theme.bodyColor};
  background-color: ${(props) => props.theme.bodyBg};
`;

const Layout = () => {
  const mode = useDarkModeStore((state) => state.mode);
  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : DarkTheme}>
      <LayoutWrapper>
        <Navbar />
        <Outlet />
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
