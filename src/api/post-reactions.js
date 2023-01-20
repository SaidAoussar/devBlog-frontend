import axios from "axios";

const URL = import.meta.env.VITE_URL;

export const checkReacted = async (post_id) => {
  const { token } = JSON.parse(localStorage.getItem("current_user"));
  try {
    const res = await axios({
      url: `${URL}/post-reactions/check`,
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
};

export const toggleReaction = async (data) => {
  const { token } = JSON.parse(localStorage.getItem("current_user"));
  try {
    const res = await axios({
      url: `${URL}/post-reactions/`,
      method: "POST",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const nbrReactionsByPost = async (postId) => {
  try {
    const res = await axios({
      url: `${URL}/post-reactions/${postId}`,
      method: "GET",
    });

    return res;
  } catch (error) {
    return error;
  }
};
