import { Form, Typography, Input, Button } from "antd";
import { useState } from "react";
import { setNewPassword } from "../../../../../api/User";
import "./account-setting.css";
const { Title, Text } = Typography;
const { Password } = Input;
const AccountSetting = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const onFinish = (values) => {
    setStatus("pending");
    setNewPassword(values)
      .then((res) => {
        if (res.status === 200) {
          setStatus("resolved");
        }

        if (res.response.status === 400) {
          throw res.resolve.data.message;
        }
      })
      .catch((e) => {
        setStatus("rejected");
        setError(e);
      });
  };
  return (
    <section className="account-setting">
      <Title level={3}>Set new password</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="currentPassword"
          label={<Text className="input-label">Current Password</Text>}
          rules={[
            {
              required: true,
              message: "Please input your current password",
            },
          ]}
        >
          <Password autoComplete="current-password" />
        </Form.Item>
        <Form.Item
          name="password"
          label={<Text className="input-label">Password</Text>}
          rules={[{ required: true, message: "Please input your password" }]}
          hasFeedback
        >
          <Password />
        </Form.Item>
        <Form.Item
          name="confirmNewPassword"
          label={<Text className="input-label">Confirm new password</Text>}
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Set New Password
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default AccountSetting;
