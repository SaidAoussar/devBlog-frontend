import React, { useEffect, useState, useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";

// ant design
import { Menu } from "antd";

import { AppContext } from "../../context/AppContext";
import HomePage from "../homepage/HomePage";
import Blog from "../homepage/Blog";
import About from "../about/About";
import Contact from "../contact/Contact";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ErrorPage from "../utils/ErrorPage";
import Profile from "../profile/Profile";
import Logout from "../auth/Logout";

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

  useEffect(() => {
    if (auth) {
      setAuthMenu([
        {
          label: <Link to={`/profile/${user._id}`}>Profile</Link>,
          key: "profile",
        },
        {
          label: <Link to="logout">Logout</Link>,
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
      <Menu mode="horizontal" items={[...items, ...authMenu]} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {auth && (
          <>
            <Route path="/profile/:id/*" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </>
        )}
        {!auth && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default NavBar;

/***
 * navbar i want:
 * https://github.com/thisuraseniya/Ant-Design-Navbar/
 *
 */
