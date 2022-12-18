import axios from "axios";

const URL = import.meta.env.VITE_URL;

export async function getTags() {
  try {
    const res = await axios.get(`${URL}/tags`);
    return res;
  } catch (error) {
    return error;
  }
}
