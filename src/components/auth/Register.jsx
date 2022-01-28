import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

function Register() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  

  const register = (e)=>{
    e.preventDefault()
    console.log(username,password,email)
  }
  return <Container>
      <Row className='justify-content-md-center'>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={register}>sign in</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>;
}

export default Register;
