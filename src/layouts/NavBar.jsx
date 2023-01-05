import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Menu, Drawer, Avatar, Input } from "antd";
import {
  LogoutOutlined,
  MenuOutlined,
  PlusCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLogout } from "../hooks/useLogout";

import Container from "../components/utils/Container";
import { useUserStore } from "../store/user";

import "./Navbar.css";

let leftItems = [
  {
    label: <Link to="/">Stories</Link>,
    key: "stories",
  },
  {
    label: <Link to="/about">About</Link>,
    key: "about",
  },
  {
    label: <Link to="contact">Contact</Link>,
    key: "contact",
  },
];

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
  const navigate = useNavigate();

  const authUser = useUserStore((state) => state.user);

  const { logout } = useLogout();

  useEffect(() => {
    if (Object.keys(authUser).length !== 0) {
      setAuthMenu([
        {
          label: <Avatar icon={<UserOutlined />} />,
          key: "login",
          children: [
            {
              label: (
                <Link to={`/profile/${authUser.id}`}>
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
                  style={{ color: "#000000e0" }}
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
    console.log("on search : ", value);
  };

  return (
    <div className="navbar">
      <Container>
        <div className="inner-navbar-wrapper">
          <div className="right-navbar">
            <Link className="logo" to="/">
              DevBlog
            </Link>
            <div
              className="links hide-for-mobile"
              style={{
                width: "300px",
              }}
            >
              <Search placeholder="Search" size="large" onSearch={onSearch} />
            </div>
          </div>
          <div
            className="lift_navbar flex-auto-desktop"
            style={{ minWidth: 0 }}
          >
            <Button
              className="hide-for-desktop"
              onClick={() => setOpenDrawer(true)}
            >
              <MenuOutlined />
            </Button>
            <Menu
              mode="horizontal"
              className="hide-for-mobile"
              style={{ justifyContent: "end" }}
              items={authMenu}
            />
          </div>
        </div>
        <Drawer
          title="DevBlog"
          placement="right"
          onClose={() => setOpenDrawer(false)}
          open={openDrawer}
        >
          <Menu
            mode="inline"
            style={{ justifyContent: "end" }}
            items={authMenu}
          />
        </Drawer>
      </Container>
    </div>
  );
}

export default NavBar;

/***
 * navbar i want:
 * https://github.com/thisuraseniya/Ant-Design-Navbar/
 *
 */
