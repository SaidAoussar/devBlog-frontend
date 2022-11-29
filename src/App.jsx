import React, { useEffect, useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { isAuthenticated } from "./api/Auth";
import { AppContext } from "./context/AppContext";

function App() {
  const context = useContext(AppContext);
  const [user, setUser] = context.useUser;
  const [auth, setAuth] = context.useAuth;
  useEffect(() => {
    isAuthenticated()
      .then((res) => {
        setUser(res.data);
        setAuth(res.data.isAuth);
      })
      .catch((e) => {
        setAuth(false);
        setUser({});
      });
  }, []);
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavBar></NavBar>
    </BrowserRouter>
  );
}

export default App;
