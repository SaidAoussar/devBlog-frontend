import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useDarkModeStore = create((set, get) => ({
  mode: localStorage.getItem("devblog:mode") || "light",
  setMode: (mode) => set({ mode }),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("DarkStore", useDarkModeStore);
}
