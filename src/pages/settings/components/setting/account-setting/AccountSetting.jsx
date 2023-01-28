import { Form, Input, Button } from "antd";
import { useState } from "react";
import { setNewPassword } from "../../../../../api/User";
import * as S from "./styles";
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
    <S.AccountSetting>
      <S.Title level={3}>Set new password</S.Title>
      <Form layout="vertical" onFinish={onFinish}>
        <S.Item
          name="currentPassword"
          label={
            <S.LabelText className="input-label">Current Password</S.LabelText>
          }
          rules={[
            {
              required: true,
              message: "Please input your current password",
            },
          ]}
        >
          <S.Password autoComplete="current-password" />
        </S.Item>
        <S.Item
          name="password"
          label={<S.LabelText className="input-label">Password</S.LabelText>}
          rules={[{ required: true, message: "Please input your password" }]}
          hasFeedback
        >
          <S.Password />
        </S.Item>
        <S.Item
          name="confirmNewPassword"
          label={
            <S.LabelText className="input-label">
              Confirm new password
            </S.LabelText>
          }
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
          <S.Password />
        </S.Item>
        <S.Item>
          <Button type="primary" htmlType="submit">
            Set New Password
          </Button>
        </S.Item>
      </Form>
    </S.AccountSetting>
  );
};

export default AccountSetting;
