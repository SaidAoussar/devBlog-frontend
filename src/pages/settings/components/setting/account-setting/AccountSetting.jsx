import { Form, Typography, Input, Button } from "antd";
import "./account-setting.css";
const { Title, Text } = Typography;
const { Password } = Input;
const AccountSetting = () => {
  return (
    <section className="account-setting">
      <Title level={3}>Set new password</Title>
      <Form layout="vertical">
        <Form.Item
          name="currentPassword"
          label={<Text className="input-label">Current Password</Text>}
        >
          <Password autoComplete="current-password" />
        </Form.Item>
        <Form.Item
          name="password"
          label={<Text className="input-label">Password</Text>}
        >
          <Password />
        </Form.Item>
        <Form.Item
          name="confirmNewPassword"
          label={<Text className="input-label">Confirm new password</Text>}
        >
          <Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Set New Password</Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default AccountSetting;
