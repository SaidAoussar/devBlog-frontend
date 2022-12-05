import React, { useState, useContext } from "react";
import { login } from "../../api/Auth";

import { Form, Input, Button, Card, Row, Col, Alert, Space, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Container from "./../utils/Container";

function Login() {
  const context = useContext(AppContext);
  const [user, setUser] = context.useUser;
  const [auth, setAuth] = context.useAuth;

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setStatus("pending");
    login(values)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          setAuth(true);
          const { token, ...user } = res.data;
          setUser(user);
          navigate("/profile/" + user._id);
        }
        if (res.status === 400) {
          throw res.data.message;
        }
      })
      .catch((e) => {
        setError(e);
        setStatus("rejected");
      });
  };

  return (
    <div>
      <Container>
        <Row justify="center">
          <Col md={12}>
            {status === "pending" && (
              <Space
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <Spin />
              </Space>
            )}

            {status === "rejected" && (
              <Alert message={error} type="error" showIcon />
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
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={status === "pending"}
                  >
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
