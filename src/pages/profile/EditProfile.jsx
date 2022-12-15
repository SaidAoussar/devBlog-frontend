import { useState } from "react";
import { Form, Input, Button, Upload, Space, Spin, Alert } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useUserStore } from "../../store/user";
import { updateUser } from "./../../api/User";

function EditProfile() {
  const authUser = useUserStore((state) => state.user);
  const setAuthUser = useUserStore((state) => state.setUser);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const onFinish = (values) => {
    setStatus("pending");
    const formData = new FormData();
    formData.append("_id", authUser._id);
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("avatar", values.avatar);

    updateUser(authUser._id, formData)
      .then((res) => {
        if (res.status === 200) {
          setAuthUser(res.data);
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

  const normFile = (e) => {
    return e?.file;
  };

  return (
    <div>
      {status === "pending" && (
        <Space
          style={{
            width: "100%",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <Spin size="large" />
        </Space>
      )}

      {status === "resolved" && <Alert message={error} type="error" />}
      {status === "resolved" && (
        <Alert message="your info updated with success" type="success" />
      )}
      <Form
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <Form.Item
          label="Username"
          name="username"
          initialValue={authUser.username}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" initialValue={authUser.email}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" initialValue="">
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Avatar"
          name="avatar"
          valuePropName="file"
          getValueFromEvent={normFile}
        >
          <Upload listType="picture" maxCount={1} beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          disabled={status === "pending"}
        >
          Save Changes
        </Button>
      </Form>
    </div>
  );
}
export default EditProfile;
