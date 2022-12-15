import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Menu } from "antd";
import { useLogout } from "../hooks/useLogout";

import Container from "../components/utils/Container";
import { useUserStore } from "../store/user";

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
  const [authMenu, setAuthMenu] = useState([]);
  const navigate = useNavigate();

  const authUser = useUserStore((state) => state.user);

  const { logout } = useLogout();

  useEffect(() => {
    console.log("is auth", authUser, Object.keys(authUser).length !== 0);
    if (Object.keys(authUser).length !== 0) {
      setAuthMenu([
        {
          label: <Link to={`/profile/${authUser._id}`}>Profile</Link>,
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
  }, [authUser]);

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
