import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useUserStore = create((set, get) => ({
  user: { ...JSON.parse(localStorage.getItem("current_user")) } || {},
  setUser: (user) => set(() => ({ user: user })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("UserStore", useUserStore);
}
