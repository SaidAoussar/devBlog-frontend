import React, { useEffect, useContext, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import { isAuthenticated } from "./api/Auth";
import { AppContext } from "./context/AppContext";

import Layout from "./layouts/Layout";
import Home from "./pages/home";
import Blog from "./pages/blog";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Login from "./pages/login";
import Register from "./pages/register";
import ErrorPage from "./components/utils/ErrorPage";
import Profile from "./pages/profile";
import Logout from "./components/auth/Logout";

function App() {
  const context = useContext(AppContext);
  const [user, setUser] = context.useUser;
  const [auth, setAuth] = context.useAuth;
  useEffect(() => {
    isAuthenticated()
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
          setAuth(res.data.isAuth);
        }

        if (res.response?.status === 400) {
          throw Error("Somethinh is wrong");
        }
      })
      .catch((e) => {
        setAuth(false);
        setUser({});
      });
  }, []);
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
