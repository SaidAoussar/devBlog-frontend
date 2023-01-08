import {
  Typography,
  Form,
  Input,
  Upload,
  Button,
  Space,
  Spin,
  Alert,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./profile-setting.css";
import { useUserStore } from "../../../../../store/user";
import { updateUser } from "../../../../../api/User";
import { useState } from "react";

const { Title, Text } = Typography;
const { TextArea } = Input;
const ProfileSetting = () => {
  const authUser = useUserStore((state) => state.user);
  const setAuthUser = useUserStore((state) => state.setUser);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setStatus("pending");
    console.log(values);
    const formData = new FormData();
    if (authUser.firstName !== values.firstName) {
      formData.append("firstName", values.firstName);
    }

    if (authUser.lastName !== values.lastName) {
      formData.append("lastName", values.lastName);
    }

    if (authUser.username !== values.username) {
      formData.append("username", values.username);
    }

    if (authUser.email !== values.email) {
      formData.append("email", values.email);
    }

    if (authUser.intro !== values.intro) {
      formData.append("intro", values.intro);
    }

    if (values.img) {
      formData.append("img", values.img);
    }

    updateUser(authUser.id, formData)
      .then((res) => {
        //status 200
        if (res.status === 200) {
          localStorage.setItem(
            "current_user",
            JSON.stringify({ ...authUser, ...res.data })
          );
          setAuthUser({ ...authUser, ...res.data });
          setStatus("resolved");
          form.resetFields(["img"]);
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
    console.log(e);
    if (e?.file?.status === "removed") {
      return null;
    }
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
        <Alert
          message="your information updated with success"
          type="success"
          closable
        />
      )}

      <section className="profile-setting">
        <Title level={3}>User</Title>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            firstName: authUser.firstName,
            lastName: authUser.lastName,
            email: authUser.email,
            username: authUser.username,
            intro: authUser.intro,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="firstName"
            label={<Text className="input-label">First name</Text>}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label={<Text className="input-label">Last name</Text>}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label={<Text className="input-label">Email</Text>}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="username"
            label={<Text className="input-label">Username</Text>}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="img"
            label={<Text className="input-label">Profile image</Text>}
            valuePropName="file"
            getValueFromEvent={normFile}
          >
            <Upload listType="picture" maxCount={1} beforeUpload={() => false}>
              <div
                style={{
                  display: "flex",
                  columnGap: "16px",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#525252",
                    borderRadius: "100%",
                  }}
                >
                  <img
                    style={{ borderRadius: "100%" }}
                    src={`${import.meta.env.VITE_URL}/${
                      authUser.img
                    }?v=${Date.now()}`}
                    alt=""
                    width="48"
                    height="48"
                  />
                </span>
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item
            name="intro"
            label={<Text className="input-label">Bio</Text>}
          >
            <TextArea rows={3} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              htmlType="submit"
              disabled={status === "pending"}
            >
              Save Profile information
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default ProfileSetting;
