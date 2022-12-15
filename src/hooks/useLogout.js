import { useUserStore } from "../store/user";

export function useLogout() {
  const setAuthUser = useUserStore((state) => state.setUser);
  const logout = () => {
    localStorage.removeItem("current_user");
    setAuthUser({});
  };

  return { logout };
}
