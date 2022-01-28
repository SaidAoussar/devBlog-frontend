import { useEffect } from 'react';
import {Navigate} from 'react-router-dom'
function Logout({useAuth}) {
  const [isAuth,setIsAuth] = useAuth

  useEffect(()=>{
    localStorage.removeItem("token");
    setIsAuth(false)
    console.log("logout")
  },[])

  console.log("logout")
  return <div>
    <Navigate to="/login"/>
    </div>
}

export default Logout;
