import { Link, useNavigate, useSearchParams } from "react-router-dom";
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
import Container from "../../components/utils/Container";
import { useState } from "react";
import { resetPassword } from "../../api/Auth";

const { Title, Paragraph } = Typography;
const { Password } = Input;

const ResetPassword = () => {
  const [status, setStatus] = useState("idle");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const onFinish = (values) => {
    setStatus("pending");
    resetPassword({
      token: searchParams.get("token"),
      newPassword: values.newPassword,
    })
      .then((res) => {
        if (res.status === 200) {
          setStatus("resolved");
        }

        if (res.status === 400) {
          setStatus("idle");
          navigate("/");
        }
      })
      .catch((e) => {
        setStatus("idle");
        navigate("/");
      });
  };
  return (
    <div className="reset-password">
      <Container>
        <Row justify="center">
          <Col md={14}>
            <Card className="login__card">
              {status !== "resolved" ? (
                <>
                  <Title className="login__title" style={{ fontSize: "28px" }}>
                    Choose a new password
                  </Title>
                  <Paragraph>
                    Create a new password that is at least 6 characters long. A
                    strong password has a combination of letters
                  </Paragraph>
                  <Form
                    name="reset-password-form"
                    layout="vertical"
                    onFinish={onFinish}
                  >
                    <Form.Item
                      label={
                        <span style={{ fontSize: "16px", fontWeight: "500" }}>
                          New password
                        </span>
                      }
                      name="newPassword"
                      required
                      rules={[
                        {
                          required: true,
                          message: "Please input your new password!",
                        },
                      ]}
                    >
                      <Password size="large" />
                    </Form.Item>
                    <Form.Item
                      label={
                        <span style={{ fontSize: "16px", fontWeight: "500" }}>
                          confirm new password
                        </span>
                      }
                      dependencies={["newPassword"]}
                      name="confirmNewPassword"
                      required
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your new password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (
                              !value ||
                              getFieldValue("newPassword") === value
                            ) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "The two passwords that you entered do not match!"
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Password size="large" />
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
                  </Form>
                </>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <Title className="login__title" style={{ fontSize: "28px" }}>
                    login to your account
                  </Title>
                  <Link to="/login">
                    <Button type="primary" size="large">
                      Login
                    </Button>
                  </Link>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetPassword;
