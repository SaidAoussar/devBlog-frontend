import React, { useState,useContext } from 'react';
import {login} from '../../api/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { AppContext } from '../../context/AppContext';



function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState()
  const context = useContext(AppContext)
  const [user,setUser] = context.useUser
  const [auth,setAuth] = context.useAuth
  const navigate = useNavigate()

  const funLogin = (e)=>{
    e.preventDefault()
    login({
      email: email,
      password: password 
    }).then((res)=>{
      if(res.data.message){
        setError(res.data.message)
      }else{
        localStorage.setItem("token",res.data.token)
        setAuth(true)
        setUser(res.data.user)
        navigate("/profile/" + res.data.user._id) 
      }
           
    }).catch((e)=>{
      console.log(e)
    })
  }
  return <div>
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={6}>
          {
            error && <>
            <Alert variant="danger">{error}</Alert>
            </>
          }
          <Card>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={funLogin}>sign in</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>;
}

export default Login;
