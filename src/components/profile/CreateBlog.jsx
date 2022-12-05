import { useState } from "react";
import { Col, Form, Input, Select, Button, Space, Spin, Alert } from "antd";
import { allTags } from "../utils/tagsData";
import { createBlog } from "../../api/Blog";

const { TextArea } = Input;

function CreateBlog({ userId }) {
  const [form] = Form.useForm();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const onFinish = (values) => {
    setStatus("pending");
    createBlog(values)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          form.resetFields();
          setStatus("resolved");
        }

        if (res.response.status === 400) {
          throw res.response.data.message;
        }
      })
      .catch((e) => {
        setError(e);
        setStatus("rejected");
      });
  };
  return (
    <Col md={16}>
      {status === "pending" && (
        <Space
          style={{
            width: "100%",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <Spin size="large"></Spin>
        </Space>
      )}

      {status === "rejected" && (
        <Alert
          message={error}
          type="error"
          closable
          onClose={() => setStatus("idle")}
        />
      )}
      {status === "resolved" && (
        <Alert
          message="Blog Added with success"
          type="success"
          closable
          onClose={() => setStatus("idle")}
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
        <Button
          type="primary"
          htmlType="submit"
          disabled={status === "pending"}
        >
          create blog
        </Button>
      </Form>
    </Col>
  );
}

export default CreateBlog;
