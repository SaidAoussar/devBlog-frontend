import create from "zustand";

export const useUserStore = create((set) => ({
  user: { ...JSON.parse(localStorage.getItem("current_user")) } || {},
  setUser: (user) => set(() => ({ user: user })),
}));
