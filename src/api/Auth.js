import axios from "axios";

const URL = import.meta.env.VITE_URL;

export const login = async (data) => {
  try {
    const doc = await axios.post(`${URL}/login`, data);
    return doc;
  } catch (e) {
    return e;
  }
};

export const register = async (data) => {
  try {
    const doc = await axios.post(`${URL}/register`, data);
    return doc;
  } catch (e) {
    return e;
  }
};

//get user info
export const isAuthenticated = async () => {
  const token = localStorage.getItem("current_user");
  const doc = await axios.get(`${URL}/isAuthenticated`, {
    headers: {
      "auth-token": token,
    },
  });
  return doc;
};
