import { useState } from "react";
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
import { forgotPassword } from "../../api/Auth";
import Container from "../../components/utils/Container";

const { Title, Paragraph } = Typography;
const ForgotPassword = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    forgotPassword(values.email)
      .then((res) => {
        if (res.status === 200) {
          form.resetFields();
          setStatus("resolved");
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
    <div className="forgot-password">
      <Container>
        <Row justify="center">
          <Col md={14}>
            {status === "resolved" && (
              <Alert
                message="Your password reset instructions have been sent."
                type="success"
                closable
                onClose={() => setStatus("idle")}
                style={{ margin: "8px 0px" }}
              />
            )}

            {status === "rejected" && (
              <Alert
                message={error}
                type="error"
                closable
                onClose={() => setStatus("idle")}
                style={{ margin: "8px 0px" }}
              />
            )}
            <Card className="login__card">
              <Title className="login__title" style={{ fontSize: "28px" }}>
                Forgot your password?
              </Title>
              <Form
                name="forgot-password-form"
                form={form}
                layout="vertical"
                onFinish={onFinish}
              >
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
                  <Input size="large" placeholder="you@email.com" />
                </Form.Item>
                <Form.Item style={{ marginBottom: "16px" }}>
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    disabled={status === "pending"}
                    size="large"
                  >
                    Send me reset password instructions
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPassword;
