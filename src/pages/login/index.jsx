import { useState } from "react";
import { login } from "../../api/Auth";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Card,
  Row,
  Col,
  Alert,
  Space,
  Spin,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";
import Container from "../../components/utils/Container";
import { useUserStore } from "../../store/user";
import "./login.css";
import { useDarkModeStore } from "../../store/dark-mode";

const { Title, Paragraph } = Typography;
function Login() {
  const setUser = useUserStore((state) => state.setUser);
  const authUser = useUserStore((state) => state.user);
  const setMode = useDarkModeStore((state) => state.setMode);

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setStatus("pending");
    login(values)
      .then((res) => {
        // 201 : created
        if (res.status === 201) {
          localStorage.setItem("current_user", JSON.stringify(res.data));
          setUser(res.data);
          setMode(res.data.mode);
          navigate("/" + res.data.username);
        }

        throw new Error("password and email incorrect");
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setStatus("rejected");
      });
  };

  return (
    <div className="login">
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
              <Alert message={error.toString()} type="error" showIcon />
            )}
            <Card className="login__card">
              <Title className="login__title">
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
                Login
              </Paragraph>
              <Form name="login-form" layout="vertical" onFinish={onFinish}>
                <Form.Item
                  label={
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>
                      Email
                    </span>
                  }
                  name="email"
                  required
                  rules={[
                    { required: true, message: "Please input yout Email!" },
                    { type: "email" },
                  ]}
                >
                  <Input size="large" autoComplete="off" />
                </Form.Item>
                <Form.Item
                  label={
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>
                      Password
                    </span>
                  }
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
                <Form.Item style={{ marginBottom: "16px" }}>
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    disabled={status === "pending"}
                    size="large"
                  >
                    Continue
                  </Button>
                </Form.Item>
                <Form.Item style={{ marginBottom: "0px" }}>
                  <Link to="/forgot-password">
                    <Button block type="link" htmlType="submit">
                      I forgot my password
                    </Button>
                  </Link>
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
