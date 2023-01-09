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
  } catch (error) {
    return error;
  }
}
