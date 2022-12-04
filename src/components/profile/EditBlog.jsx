import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { Col, Form, Input, Select, Button, Space, Spin } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { allTags } from "../utils/tagsData";
import { getBlog, updateBlog } from "../../api/Blog";

const { TextArea } = Input;

function EditBlog({ userId }) {
  const { blogid } = useParams();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    getBlog(blogid)
      .then((res) => {
        form.setFieldsValue({
          title: res.data.title,
          body: res.data.body,
          tags: res.data.tags,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const onFinish = (values) => {
    setLoading(true);

    updateBlog({
      ...values,
      _id: blogid,
      author: userId,
    })
      .then((res) => {
        toast.success(`update with success`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });

        setLoading(false);
      })
      .catch((e) => {
        toast.error("something wrong", {
          position: toast.POSITION.TOP_CENTER,
        });

        setLoading(false);
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
        <Button type="primary" htmlType="submit" disabled={loading}>
          Edit blog
        </Button>
      </Form>
    </Col>
  );
}

export default EditBlog;
