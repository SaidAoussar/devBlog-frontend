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
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    if (values.password) {
      formData.append("password", values.password);
    }
    if (values.avatar) {
      formData.append("img", values.avatar);
    }

    updateUser(authUser.id, formData)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem(
            "current_user",
            JSON.stringify({ ...authUser, ...res.data })
          );
          // bc res.data dont containt token
          setAuthUser({ ...authUser, ...res.data });
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

      {status === "rejected" && <Alert message={error} type="error" />}
      {status === "resolved" && (
        <Alert message="your info updated with success" type="success" />
      )}
      <Form
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          initialValue={authUser.firstName}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          initialValue={authUser.lastName}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" initialValue={authUser.email}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
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
