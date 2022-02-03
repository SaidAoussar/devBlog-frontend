import { useEffect, useState } from 'react'
import {useParams, NavLink, Routes, Route} from 'react-router-dom'
import {getUser} from '../../api/User'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import UserBlogs from './UserBlogs'
import CreateBlog from './CreateBlog'
import avatar from '../../assets/img/avatar.png'
import './profile.module.css';


function Profile() {

  const { id } = useParams()
  const [user,setUser] = useState({})

  useEffect(()=>{
    getUser(id).then((res)=>{
      setUser(res.data)
    }).catch((e)=>{
      console.log(e)
    })
  },[])
  return <Container className='mb-5'>
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <div className="text-center"><Image width="170px" height="170px" src={avatar}></Image></div>
            <Card.Title className="text-center mt-3">{user.username}</Card.Title>
            <Card.Text className="text-center mt-3">{user.email}</Card.Text>
          </Card.Body>    
        </Card>
      </Col>
        
    </Row>
    <Row>
      <Col><NavLink to="blogs" className={({isActive})=>{
        return "btn d-block btn-" + (isActive ? "primary" : "secondary")
      }}>All Bogs</NavLink></Col>
      <Col><NavLink to="create" className={({isActive})=>{
        return "btn d-block btn-" + (isActive ? "primary" : "secondary")
      }}>create Bogs</NavLink></Col>
    </Row>
    <Row className="mt-4 mb-5 justify-content-md-center">
      <Routes>
          <Route path="/blogs" element={<UserBlogs userId={id}/>}/>
          <Route path="/create" element={<CreateBlog/>}/>
      </Routes>
    </Row>
  </Container>;
}

export default Profile;
