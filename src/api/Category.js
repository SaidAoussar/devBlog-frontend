import axios from "axios";

const URL = import.meta.env.VITE_URL;

export async function getCategories() {
  try {
    const res = await axios.get(`${URL}/categories`);
    return res;
  } catch (error) {
    return error;
  }
}
