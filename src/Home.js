import React,{useEffect, useContext} from 'react'
import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar'
import {isAuthenticated} from './api/Auth'
import {AppContext} from './context/AppContext'

export default function Home() {
  const context = useContext(AppContext)
  const [user,setUser] = context.useUser
  const [auth,setAuth] = context.useAuth
  useEffect(()=>{
    isAuthenticated().then((res)=>{
      setUser(res.data)
      setAuth(res.data.isAuth)
      console.log(res.data)
    })
    .catch(e => {
      setAuth(false)
      setUser({})
      console.log(e.response.data.message)
  });

  },[])

    return (
        <div>
          <NavBar></NavBar>
        </div>
    )
}
