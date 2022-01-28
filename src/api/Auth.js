import axios from 'axios'

const URL = process.env.REACT_APP_URL

export const login = async (data) => {
  try {
    const doc = await axios.post(`${URL}/login`,data)
    return doc
  } catch (e) {
    console.log(e)
  }
  
}


export const register = async (data) =>{
  try {
    const doc = await axios.post(`${URL}/register`,data)
    return doc
  } catch (e) {
    console.log(e)
  }
}

//get user info
export const isAuthenticated = async () =>{
  const token = localStorage.getItem("token")
  const doc = await axios.get(`${URL}/isAuthenticated`,{
    headers:{
      "auth-token": token
    }
  })
  return doc
  

}




