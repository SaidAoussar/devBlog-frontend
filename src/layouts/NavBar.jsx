import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Menu, Drawer, Avatar } from "antd";
import {
  LogoutOutlined,
  MenuOutlined,
  PlusCircleOutlined,
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

function NavBar({}) {
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
                <Link>
                  <PlusCircleOutlined style={{ marginRight: "8px" }} />
                  Create Post
                </Link>
              ),
              key: "create-post",
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

  return (
    <div>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="right-navbar"
            style={{
              display: "flex",
              alignItems: "center",
              flexGrow: 2,
            }}
          >
            <span className="logo" style={{ flexGrow: 1 }}>
              DevBlog
            </span>
            <div className="links hide-for-mobile" style={{ flexGrow: 3 }}>
              <Menu mode="horizontal" items={leftItems} />
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
          <Menu mode="inline" items={leftItems} />
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
