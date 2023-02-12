import { useState } from "react";
import { Form, Upload, Button, Space, Spin, Alert } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import userDefaultImg from "/public/img/user.png";
import { useUserStore } from "../../../../../store/user";
import { updateUser } from "../../../../../api/User";
import * as S from "./styles";

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

      <S.ProfileSetting>
        <S.Title level={3}>User</S.Title>
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
          <S.Item
            name="firstName"
            label={<S.LabelText>First name</S.LabelText>}
          >
            <S.Input placeholder="John" />
          </S.Item>
          <S.Item name="lastName" label={<S.LabelText>Last name</S.LabelText>}>
            <S.Input placeholder="Doe" />
          </S.Item>
          <S.Item name="email" label={<S.LabelText>Email</S.LabelText>}>
            <S.Input placeholder="john.doe@example.com" />
          </S.Item>
          <S.Item name="username" label={<S.LabelText>Username</S.LabelText>}>
            <S.Input placeholder="johndoe" />
          </S.Item>
          <S.Item
            name="img"
            label={<S.LabelText>Profile image</S.LabelText>}
            valuePropName="file"
            getValueFromEvent={normFile}
          >
            <Upload listType="picture" maxCount={1} beforeUpload={() => false}>
              <S.UploadContainer>
                <S.ImageWrapper>
                  <img
                    style={{ borderRadius: "100%", objectFit: "cover" }}
                    src={
                      authUser.img
                        ? `${import.meta.env.VITE_URL}/${
                            authUser.img
                          }?v=${Date.now()}`
                        : userDefaultImg
                    }
                    alt=""
                    width="48"
                    height="48"
                  />
                </S.ImageWrapper>
                <S.Button icon={<UploadOutlined />}>Click to upload</S.Button>
              </S.UploadContainer>
            </Upload>
          </S.Item>
          <S.Item name="intro" label={<S.LabelText>Bio</S.LabelText>}>
            <S.TextArea rows={3} placeholder="A short bio..." />
          </S.Item>
          <S.Item>
            <Button
              type="primary"
              block
              htmlType="submit"
              disabled={status === "pending"}
            >
              Save Profile information
            </Button>
          </S.Item>
        </Form>
      </S.ProfileSetting>
    </div>
  );
};

export default ProfileSetting;
