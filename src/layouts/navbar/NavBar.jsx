import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Menu, Drawer, Avatar, Input, Image } from "antd";
import {
  LogoutOutlined,
  MenuOutlined,
  PlusCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAtom } from "jotai";
import userDefaultImg from "/public/img/user.png";
import * as S from "./styles";
import { useLogout } from "../../hooks/useLogout";
import Container from "../../components/utils/Container";
import { useUserStore } from "../../store/user";
import { pageNumberAtom } from "../../pages/search/store/page-number";

let rightItems = [
  {
    label: <Link to="/login">Login</Link>,
    key: "login",
  },
  {
    label: <Link to="/register">Register</Link>,
    key: "register",
  },
];

const { Search } = Input;

function NavBar() {
  const [authMenu, setAuthMenu] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [_, setPageNumber] = useAtom(pageNumberAtom);
  const navigate = useNavigate();

  const authUser = useUserStore((state) => state.user);

  const { logout } = useLogout();

  useEffect(() => {
    if (Object.keys(authUser).length !== 0) {
      setAuthMenu([
        {
          key: "auth1",
          label: (
            <Avatar
              src={
                authUser.img
                  ? `${import.meta.env.VITE_URL}/${authUser.img}`
                  : userDefaultImg
              }
            />
          ),
          children: [
            {
              label: (
                <Link to={`/${authUser.username}`}>
                  <UserOutlined style={{ marginRight: "8px" }} />
                  Profile
                </Link>
              ),
              key: "profile",
            },
            {
              label: (
                <Link to="new">
                  <PlusCircleOutlined style={{ marginRight: "8px" }} />
                  Create Post
                </Link>
              ),
              key: "create-post",
            },
            {
              label: (
                <Link to="/settings">
                  <SettingOutlined style={{ marginRight: "8px" }} />
                  Settings
                </Link>
              ),
              key: "Settings",
            },
            {
              label: (
                <span
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                  style={{ color: "inherit" }}
                >
                  <LogoutOutlined style={{ marginRight: "8px" }} />
                  logout
                </span>
              ),
              key: "logout",
            },
          ],
        },
      ]);
    } else {
      setAuthMenu(rightItems);
    }
  }, [authUser]);

  const onSearch = (value) => {
    setPageNumber(1);
    navigate(`/search?q=${value}&filters=posts`);
  };

  return (
    <S.Navbar>
      <Container>
        <S.NavbarContainer>
          <S.LeftNavbar>
            <S.Logo to="/">DevBlog</S.Logo>
            <S.SearchWrapper>
              <S.Search placeholder="Search" size="large" onSearch={onSearch} />
            </S.SearchWrapper>
          </S.LeftNavbar>
          <S.RightNavbar style={{ minWidth: 0 }}>
            <S.MobileBtnWrapper onClick={() => setOpenDrawer(true)}>
              <MenuOutlined />
            </S.MobileBtnWrapper>
            <S.MenuWrapper mode="horizontal" items={authMenu} />
          </S.RightNavbar>
        </S.NavbarContainer>
        <S.DrawerWrapper
          title="DevBlog"
          placement="right"
          onClose={() => setOpenDrawer(false)}
          open={openDrawer}
        >
          <S.MobileMenuWrapper
            mode="inline"
            items={authMenu}
            openKeys={["auth1"]}
          />
        </S.DrawerWrapper>
      </Container>
    </S.Navbar>
  );
}

export default NavBar;

/***
 * navbar i want:
 * https://github.com/thisuraseniya/Ant-Design-Navbar/
 *
 */
