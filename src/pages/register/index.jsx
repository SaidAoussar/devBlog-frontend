import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Input,
  Card,
  Typography,
  Button,
  Alert,
  Space,
  Spin,
} from "antd";

import { register } from "../../api/Auth";
import Container from "../../components/utils/Container";
import "./register.css";
const { Title, Paragraph } = Typography;
function Register() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onFinish = (values) => {
    register(values)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
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
    <div className="register">
      <Container>
        <Row justify="center">
          <Col md={14}>
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
                message={<p>You register with succcess, check your email.</p>}
                type="success"
              />
            )}
            <Card className="register__card">
              <Title className="register__title">
                Welcome to DevBlog Community
              </Title>
              <Paragraph
                style={{
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "rgb(113,113,113)",
                }}
              >
                Register
              </Paragraph>
              <Form name="register-form" layout="vertical" onFinish={onFinish}>
                <Form.Item
                  label={<span>First Name</span>}
                  name="firstName"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  label={<span>Last Name</span>}
                  name="lastName"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input your first last name!",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  label={<span>Email</span>}
                  name="email"
                  required
                  rules={[
                    { required: true, message: "Please input your Email!" },
                    { type: "email" },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
                {/* todo: create username in database unique. localhost/sabiri10 */}
                {/* <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item> */}
                <Form.Item
                  label={<span>Password</span>}
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password size="large" />
                </Form.Item>
                <Form.Item style={{ marginBottom: "0px" }}>
                  <Button
                    type="primary"
                    block
                    size="large"
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

export default Register;
