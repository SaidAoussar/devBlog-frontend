import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/Auth";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const funRegister = (e) => {
    e.preventDefault();
    register({
      email: email,
      username: username,
      password: password,
    })
      .then((res) => {
        if (res.data.message) {
          setError(res.data.message);
        } else {
          navigate("/login");
          console.log("register success");
        }
      })
      .catch((e) => {
        setError(e.message);
      });
    console.log(username, password, email);
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Card>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={funRegister}>
                  sign in
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
