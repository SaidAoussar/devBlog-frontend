import axios from "axios";

const URL = import.meta.env.VITE_URL;

export const getAllSavePosts = async (tag_id = 0, q) => {
  const { token } = JSON.parse(localStorage.getItem("current_user")) || {
    token: null,
  };

  if (token) {
    let params = {};
    if (tag_id !== 0) {
      params = { ...params, tag_id };
    }

    if (q) {
      params = { ...params, q };
    }
    try {
      const res = await axios({
        url: `${URL}/saves`,
        method: "GET",
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    } catch (error) {
      return error;
    }
  }
};

export const getAllTagsOfSaves = async () => {
  const { token } = JSON.parse(localStorage.getItem("current_user")) || {
    token: null,
  };
  if (token) {
    try {
      const res = await axios({
        url: `${URL}/saves/find-all-tags`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    } catch (error) {
      return error;
    }
  }
};

export const checkSaved = async (post_id) => {
  const { token } = JSON.parse(localStorage.getItem("current_user")) || {
    token: null,
  };
  if (token) {
    try {
      const res = await axios({
        url: `${URL}/saves/check`,
        method: "GET",
        params: { post_id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res;
    } catch (error) {
      return error;
    }
  }
};

export const nbrSavesByPost = async (post_id) => {
  try {
    const res = await axios({
      url: `${URL}/saves/${post_id}`,
      method: "GET",
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const toggleSave = async (post_id) => {
  const { token } = JSON.parse(localStorage.getItem("current_user")) || {
    token: null,
  };
  if (token) {
    try {
      const res = await axios({
        url: `${URL}/saves`,
        method: "POST",
        data: {
          post_id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    } catch (error) {
      return error;
    }
  }
};

export const removeSave = async (id) => {
  const { token } = JSON.parse(localStorage.getItem("current_user")) || {
    token: null,
  };
  try {
    const res = await axios({
      url: `${URL}/saves/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
