import axios from 'axios';

const URL = process.env.REACT_APP_URL

export const getBlogs = async ()=>{
  try {
    const res = await axios.get(`${URL}/blog`)
    return res
  } catch (e) {
    console.log(e)
  }
}

export const getBlog = async (id) => {
  try {
    const res = await axios.get(`${URL}/blog/${id}`)
    return res
  } catch (e) {
    console.log(e)
  }
}
export const allBlogsOfUser = async (id) =>{
  console.log("id form blog api" + id)
  try {
    const res = await axios.get(`${URL}/blog/user/`+id)
    return res
  } catch (e) {
    console.log(e)
  }
}