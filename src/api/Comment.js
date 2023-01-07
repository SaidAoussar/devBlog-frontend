import axios from "axios";

const URL = import.meta.env.VITE_URL;

export const nbrCommentsOfUser = async (id) => {
  try {
    const res = await axios.get(`${URL}/comments/nbrCommentsOfUser/` + id);
    return res;
  } catch (e) {
    return e;
  }
};
