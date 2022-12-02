import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Input, Card, Button, Alert } from "antd";

import { register } from "../../api/Auth";
import Container from "./../utils/Container";
function Register() {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onFinish = (values) => {
    register(values)
      .then((res) => {
        if (res.data.message) {
          setError(res.data.message);
        } else {
          navigate("/login");
        }
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  return (
    <Container>
      <Row justify="center">
        <Col md={12}>
          {error && <Alert message={error} type="error" showIcon />}
          <Card>
            <Form
              name="register-form"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Email"
                name="email"
                required
                rules={[
                  { required: true, message: "Please input your Email!" },
                  { type: "email" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
