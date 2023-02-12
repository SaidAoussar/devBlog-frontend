import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useDarkModeStore = create((set, get) => ({
  mode: JSON.parse(localStorage.getItem("current_user"))?.mode || "LIGHT",
  setMode: (mode) => set({ mode }),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("DarkStore", useDarkModeStore);
}
