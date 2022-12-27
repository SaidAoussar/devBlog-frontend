import { Typography, Form, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./profile-setting.css";

const { Title, Text } = Typography;
const { TextArea } = Input;
const ProfileSetting = () => {
  return (
    <section className="profile-setting">
      <Title level={3}>User</Title>
      <Form layout="vertical">
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
          name="profileImg"
          label={<Text className="input-label">Profile image</Text>}
          valuePropName="file"
        >
          <div
            style={{ display: "flex", columnGap: "16px", alignItems: "center" }}
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
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--5JPmZh2w--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/534025/a0031f0c-e12a-41d9-b87c-ba47b66b6c48.jpg"
                alt=""
                width="48"
                height="48"
              />
            </span>

            <Upload listType="picture" maxCount={1} beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </div>
        </Form.Item>
        <Form.Item name="bio" label={<Text className="input-label">Bio</Text>}>
          <TextArea rows={3} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            Save Profile information
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default ProfileSetting;
