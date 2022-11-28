import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
function Logout() {
  const context = useContext(AppContext);
  const [user, setUser] = context.useUser;
  const [auth, setAuth] = context.useAuth;

  useEffect(() => {
    localStorage.removeItem("token");
    setAuth(false);
    setUser({});
  }, []);

  return (
    <div>
      <Navigate to="/login" />
    </div>
  );
}

export default Logout;
