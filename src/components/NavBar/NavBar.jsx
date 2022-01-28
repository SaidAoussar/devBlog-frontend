import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {Link, Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import HomePage from '../homepage/HomePage'
import Blog from '../homepage/Blog'
import About from '../about/About'
import Contact from '../contact/Contact'
import Login from '../auth/Login'
import Register from '../auth/Register'
import ErrorPage from '../utils/ErrorPage'
import Profile from '../profile/Profile'
import Logout from '../auth/Logout'
import NavAuth from './NavAuth'

function NavBar({useAuth,user}) {
  const [isAuth,setIsAuth] = useAuth
  const [menu,setMenu] =useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    console.log("hello")
    if(isAuth){
      console.log("true isAuth")
      setMenu([
        {
          name: "profile",
          to: `/profile/${user._id}`
        },
        {
          name: "Logout",
          to: "/logout"
        }
      ])
 
    }else{
      setMenu([
        {
        name: "Login",
        to: "/login"
        },
        {
          name: "Register",
          to: "/register"
        }
    ])

    }
  },[isAuth])


  

    console.log(menu)



  return <div>
    <Navbar bg="dark" variant="dark" expand="lg" className='mb-5'>
      <Container>
        <Navbar.Brand href="#home">MyBlog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <NavAuth routesLink={menu} ></NavAuth>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/blog/:id" element={<Blog />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
      {
        isAuth && <>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/logout" element={<Logout useAuth={useAuth}/>}/>
        </>
      }
      {
        !isAuth && <>
        <Route path="/login" element={<Login useAuth={useAuth}/>}/>
        <Route path="/register" element={<Register useAuth={useAuth}/>}/>
        </>
      }
      
      

      
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>   
  </div>;
}

export default NavBar;
