import axios from "axios";

const URL = import.meta.env.VITE_URL;

export async function getTags(filters) {
  try {
    const res = await axios({
      url: `${URL}/tags`,
      method: "GET",
      params: { ...filters },
    });
    return res;
  } catch (e) {
    return e;
  }
}

export async function getTag(id) {
  try {
    const res = await axios.get(`${URL}/tags/${id}`);
    return res;
  } catch (e) {
    return e;
  }
}
