import axios from "axios";

const URL = process.env.REACT_APP_URL;

export const getBlogs = async () => {
  try {
    const res = await axios.get(`${URL}/blog`);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getBlog = async (id) => {
  try {
    const res = await axios.get(`${URL}/blog/${id}`);
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const allBlogsOfUser = async (id) => {
  try {
    const res = await axios.get(`${URL}/blog/user/` + id);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const createBlog = async (data) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.post(`${URL}/blog`, data, {
      headers: {
        "auth-token": token,
      },
    });
    return res;
  } catch (e) {
    return e;
  }
};

export const updateBlog = async (data) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.put(`${URL}/blog`, data, {
      headers: {
        "auth-token": token,
      },
    });
    return res;
  } catch (e) {
    return e;
  }
};

export const RemoveBlog = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const doc = axios.delete(`${URL}/blog/${id}`, {
      headers: {
        "auth-token": token,
      },
    });
    return doc;
  } catch (e) {
    return e;
  }
};
