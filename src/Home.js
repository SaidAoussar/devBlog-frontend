import React,{useEffect, useState} from 'react'
import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import {isAuthenticated} from './api/Auth'

export default function Home() {

  const [user,setUser] = useState({})
  const [isAuth,setIsAuth] = useState()
  useEffect(()=>{
      isAuthenticated().then((res)=>{
        setUser(res.data)
        setIsAuth(res.data.isAuth)
        console.log(res.data)
      })
      .catch(e => {
        setIsAuth(false)
        setUser({})
        console.log(e.response.data.message)
    });

  },[])
    return (
        <div>
          <NavBar useAuth={[isAuth,setIsAuth]} user={user}></NavBar>
        </div>
    )
}
