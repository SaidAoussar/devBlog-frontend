import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Row, Col, Form, Input, Card, Button, Alert, Space, Spin } from "antd";

import { register } from "../../api/Auth";
import Container from "../../components/utils/Container";
function Register() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onFinish = (values) => {
    setStatus("pending");
    register(values)
      .then((res) => {
        if (res.status === 200) {
          setStatus("resolved");
        }

        if (res.response?.status === 400) {
          throw res.response.data.message;
        }
      })
      .catch((e) => {
        setError(e);
        setStatus("rejected");
      });
  };
  return (
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

          {status === "resolved" && (
            <Alert
              message={
                <p>
                  You register with succcess, you can
                  <Link to="login">login</Link>
                </p>
              }
              type="success"
            />
          )}
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
  );
}

export default Register;
