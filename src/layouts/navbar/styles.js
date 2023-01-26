import { Button, Drawer, Menu, Input, theme } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/device";

const { Search: SearchAnt } = Input;

export const Navbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 56px;
  margin-bottom: 16px;
  background-color: red;
  background-color: ${(props) => props.theme.headerBg};
  box-shadow: 0 1px 1px ${(props) => props.theme.headerShadow};
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftNavbar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
`;
export const Logo = styled(Link)`
  color: ${(props) => props.theme.bodyColor};
  padding: 10px;
`;
export const SearchWrapper = styled.div`
  width: 300px;
  display: none;
  @media ${device.md} {
    display: block;
  }
`;

export const Search = styled(SearchAnt)`
  && {
    input {
      background-color: ${(props) => props.theme.formBg};
      color: ${(props) => props.theme.bodyColor};
      border: 1px solid ${(props) => props.theme.formBorder};
    }

    input:hover {
      border-color: ${(props) => props.theme.formBorderHover};
    }
    input:focus {
      background-color: ${(props) => props.theme.formBgFocus};
      border-color: ${(props) => props.theme.focus};
      box-shadow: 0 0 0 1px ${(props) => props.theme.focus};
    }

    input::placeholder {
      color: ${(props) => props.theme.formPlaceholderColor};
    }
    .ant-input-group-addon {
      background-color: ${(props) => props.theme.btnBg};
    }

    button {
      color: ${(props) => props.theme.btnColor}!important;
      background-color: ${(props) => props.theme.btnBg}!important;
      border: 1px solid ${(props) => props.theme.formBorder}!important;
    }

    button:hover {
      color: ${(props) => props.theme.btnColor} !important;
      border-color: ${(props) => props.theme.formBorderHover}!important;
    }
  }
`;

export const RightNavbar = styled.div`
  @media ${device.md} {
    flex: auto;
  }
`;
export const MobileBtnWrapper = styled(Button)`
  background-color: ${(props) => props.theme.btnBg};
  color: ${(props) => props.theme.btnColor};
  border-color: ${(props) => props.theme.base[30]};
  @media ${device.md} {
    display: none;
  }
`;
export const MenuWrapper = styled(Menu)`
  && {
    justify-content: end;
    border-bottom: none;
    display: none;
    background-color: transparent;
    color: ${(props) => props.theme.menuColor};

    @media ${device.md} {
      display: flex;
    }

    .ant-menu-item:hover {
      color: ${(props) => props.theme.menuColor};
    }

    .ant-menu-item:hover::after {
      border-color: ${(props) => props.theme.menuLinkBorderColor};
    }
    .ant-menu-item:hover:not(.ant-menu-item-selected):not(
        .ant-menu-submenu-selected
      ) {
      color: ${(props) => props.theme.menuColor};
    }

    .ant-menu.ant-menu-sub.ant-menu-vertical {
      background-color: red;
    }
  }
`;

export const DrawerWrapper = styled(Drawer)`
  && {
    background-color: ${(props) => props.theme.drawerBg};

    .ant-drawer-close {
      color: ${(props) => props.theme.drawerColor};
    }
    .ant-drawer-title {
      color: ${(props) => props.theme.drawerColor};
    }
  }
`;
export const MobileMenuWrapper = styled(Menu)`
  && {
    background-color: transparent;
    justify-content: end;
    color: ${(props) => props.theme.menuColor};

    .ant-menu-item:hover:not(.ant-menu-item-selected):not(
        .ant-menu-submenu-selected
      ) {
      color: ${(props) => props.theme.menuColor};
    }

    .ant-menu-submenu {
      color: ${(props) => props.theme.menuColor};
    }
    .ant-menu.ant-menu-sub {
      background-color: ${(props) => props.theme.menuBg};
    }
  }
`;
