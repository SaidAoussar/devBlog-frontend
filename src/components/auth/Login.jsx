import React, { useState, useContext } from "react";
import { login } from "../../api/Auth";

import { Form, Input, Button, Card, Row, Col, Alert } from "antd";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Container from "./../utils/Container";

function Login() {
  const [error, setError] = useState();
  const context = useContext(AppContext);
  const [user, setUser] = context.useUser;
  const [auth, setAuth] = context.useAuth;
  const navigate = useNavigate();

  const onFinish = (values) => {
    login(values)
      .then((res) => {
        if (res.data.message) {
          setError(res.data.message);
        } else {
          localStorage.setItem("token", res.data.token);
          setAuth(true);

          const { token, ...user } = res.data;
          setUser(user);
          navigate("/profile/" + user._id);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Container>
        <Row justify="center">
          <Col md={12}>
            {error && (
              <>
                <Alert message={error} type="error" showIcon />
              </>
            )}
            <Card>
              <Form
                name="login-form"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                onFinish={onFinish}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  required
                  rules={[
                    { required: true, message: "Please input yout Email!" },
                    { type: "email" },
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
                <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                  <Button type="primary" htmlType="submit">
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
