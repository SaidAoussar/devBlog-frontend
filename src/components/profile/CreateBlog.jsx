import { useState } from "react";
import { Col, Form, Input, Select, Button, Space, Spin } from "antd";
import { allTags } from "../utils/tagsData";
import { createBlog } from "../../api/Blog";
import { toast } from "react-toastify";

const { TextArea } = Input;

function CreateBlog({ userId }) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setLoading(true);
    createBlog(values)
      .then((res) => {
        form.resetFields();
        toast.success("the blog add with success", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
      })
      .catch((e) => {
        toast.error("something wrong", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    setLoading(false);
  };
  return (
    <Col md={16}>
      {loading && (
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
          <TextArea rows={5} />
        </Form.Item>
        <Form.Item label="Tags" name="tags">
          <Select
            mode="multiple"
            allowClear
            placeholder="Select Tags"
            options={allTags}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" disabled={loading}>
          create blog
        </Button>
      </Form>
    </Col>
  );
}

export default CreateBlog;
