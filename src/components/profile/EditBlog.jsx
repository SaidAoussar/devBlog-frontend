import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { Col, Form, Input, Select, Button, Space, Spin, Alert } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { allTags } from "../utils/tagsData";
import { getBlog, updateBlog } from "../../api/Blog";

const { TextArea } = Input;

function EditBlog({ userId }) {
  const { blogid } = useParams();
  const [form] = Form.useForm();
  const [blogStatus, setBlogStatus] = useState("idle");
  const [blogError, setBlogError] = useState(null);

  const [updateStatus, setUpdateStatus] = useState("idle");
  const [updateError, setUpdateError] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    setBlogStatus("pending");
    getBlog(blogid)
      .then((res) => {
        if (res.status === 200) {
          form.setFieldsValue({
            title: res.data.title,
            body: res.data.body,
            tags: res.data.tags,
          });
          setBlogStatus("resolved");
        }
        if (res.status === 400) {
          throw res.data.message;
        }
      })
      .catch((e) => {
        setBlogError(e);
        setBlogStatus("rejected");
      });
  }, []);

  const onFinish = (values) => {
    setUpdateStatus("pending");
    updateBlog({
      ...values,
      _id: blogid,
      author: userId,
    })
      .then((res) => {
        if (res.status === 200) {
          setUpdateStatus("resolved");
        }

        if (res.status === 400) {
          throw res.data.message;
        }
      })
      .catch((e) => {
        setUpdateError(e);
        setUpdateStatus("rejected");
      });
  };

  return (
    <Col md={16}>
      <ArrowLeftOutlined
        onClick={() => navigate(-1)}
        style={{
          fontSize: "1.5rem",
          cursor: "pointer",
          marginRight: "4px",
          marginBottom: "1.2rem",
        }}
      />
      {blogStatus === "pending" && (
        <Space
          style={{
            width: "100%",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <Spin tip="Loading..." size="large"></Spin>
        </Space>
      )}
      {blogStatus === "rejected" && <Alert message={blogError} type="error" />}
      {blogStatus === "resolved" && (
        <>
          {updateStatus === "pending" && (
            <Space
              style={{
                width: "100%",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <Spin tip="Loading..." size="large"></Spin>
            </Space>
          )}
          {updateStatus === "rejected" && (
            <Alert
              message={updateError}
              type="error"
              closable
              onClose={() => setUpdateStatus("idle")}
            />
          )}
          {updateStatus === "resolved" && (
            <Alert
              message="Blog updated with success"
              type="success"
              closable
              onClose={() => setUpdateStatus("idle")}
            />
          )}
          <Form
            form={form}
            labelCol={6}
            wrapperCol={16}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item label="Title" name="title">
              <Input />
            </Form.Item>
            <Form.Item label="Body" name="body">
              <TextArea rows={7} />
            </Form.Item>
            <Form.Item label="tags" name="tags">
              <Select
                mode="multiple"
                allowClear
                placeholder="Update Tags"
                options={allTags}
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={updateStatus === "pending"}
            >
              Edit blog
            </Button>
          </Form>
        </>
      )}
    </Col>
  );
}

export default EditBlog;
