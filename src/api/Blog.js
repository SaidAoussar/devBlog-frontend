import axios from "axios";

const URL = import.meta.env.VITE_URL;

export const getBlogs = async (p = 1, filters) => {
  try {
    //const res = await axios.get(`${URL}/posts?page=${p}`);
    const res = await axios({
      url: `${URL}/posts`,
      method: "GET",
      params: { page: p, ...filters },
    });
    return res;
  } catch (e) {
    return e;
  }
};

export const getBlog = async (id) => {
  try {
    const res = await axios.get(`${URL}/posts/${id}`);
    return res;
  } catch (e) {
    return e;
  }
};
export const allBlogsOfUser = async (id) => {
  try {
    const res = await axios.get(`${URL}/posts/user/` + id);
    return res;
  } catch (e) {
    return e;
  }
};

export const createBlog = async (data) => {
  const { token } = JSON.parse(localStorage.getItem("current_user"));
  try {
    const res = await axios.post(`${URL}/posts`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (e) {
    return e;
  }
};

export const updateBlog = async (id, data) => {
  const { token } = JSON.parse(localStorage.getItem("current_user"));
  try {
    const res = await axios.patch(`${URL}/posts/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (e) {
    return e;
  }
};

export const RemoveBlog = async (id) => {
  const { token } = JSON.parse(localStorage.getItem("current_user"));
  try {
    const doc = axios.delete(`${URL}/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return doc;
  } catch (e) {
    return e;
  }
};

export const nbrPostsOfUser = async (id) => {
  try {
    const res = await axios.get(`${URL}/posts/nbrPostsOfUser/` + id);
    return res;
  } catch (e) {
    return e;
  }
};
