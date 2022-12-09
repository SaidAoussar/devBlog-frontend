import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Menu } from "antd";
import { useLogout } from "../hooks/useLogout";
import { AppContext } from "../context/AppContext";

import Container from "../components/utils/Container";

let items = [
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

function NavBar({}) {
  const context = useContext(AppContext);
  const [user, setUser] = context.useUser;
  const [auth, setAuth] = context.useAuth;
  const [authMenu, setAuthMenu] = useState([]);
  const navigate = useNavigate();

  const { logout } = useLogout();

  useEffect(() => {
    if (auth) {
      setAuthMenu([
        {
          label: <Link to={`/profile/${user._id}`}>Profile</Link>,
          key: "profile",
        },
        {
          label: (
            <Button
              type="link"
              onClick={() => {
                logout();
                navigate("/login");
              }}
              style={{ color: "#000000e0" }}
            >
              logout
            </Button>
          ),
          key: "logout",
        },
      ]);
    } else {
      setAuthMenu([
        {
          label: <Link to="/login">Login</Link>,
          key: "login",
        },
        {
          label: <Link to="/register">Register</Link>,
          key: "register",
        },
      ]);
    }
  }, [auth, user]);

  return (
    <div>
      <Container>
        <Menu mode="horizontal" items={[...items, ...authMenu]} />
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
