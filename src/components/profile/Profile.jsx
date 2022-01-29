import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import {isAuthenticated} from '../../api/Auth'
import avatar from '../../assets/img/avatar.png'
import './profile.module.css';

function Profile() {
  const [user,setUser] = useState({})

  useEffect(()=>{
    isAuthenticated().then((res)=>{
      setUser(res.data)
    }).catch((e)=>{
      console.log(e)
    })
  },[])
  return <Container>
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
  </Container>;
}

export default Profile;
