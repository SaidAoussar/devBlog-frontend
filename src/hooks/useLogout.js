import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function useLogout() {
  const context = useContext(AppContext);
  const [, setUser] = context.useUser;
  const [, setAuth] = context.useAuth;

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
    setUser({});
  };

  return { logout };
}
