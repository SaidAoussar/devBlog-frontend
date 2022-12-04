import { useContext } from "react";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { AppContext } from "../../context/AppContext";
import { updateUser } from "./../../api/User";

function EditProfile() {
  const context = useContext(AppContext);
  const [user, setUser] = context.useUser;

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append("_id", user._id);
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("avatar", values.avatar);


    updateUser(user._id, formData)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const normFile = (e) => {
    return e?.file;
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <Form.Item
          label="Username"
          name="username"
          initialValue={user.username}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" initialValue={user.email}>
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

        <Button type="primary" htmlType="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}
export default EditProfile;
