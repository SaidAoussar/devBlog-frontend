import { useEffect, useState } from "react";
import {
  Col,
  Form,
  Input,
  Select,
  Button,
  Space,
  Spin,
  Alert,
  Switch,
} from "antd";
//import { allTags } from "../../components/utils/tagsData";
import { createBlog } from "../../api/Blog";
import { getTags } from "../../api/Tag";
import { getCategories } from "../../api/Category";

// this function formatting array come from database to select option array shap
function formatSelectOptions(arr) {
  let options = [];
  arr.forEach((tag) => {
    options.push({ value: tag.id, label: tag.name });
  });
  return options;
}

const { TextArea } = Input;

function CreateBlog({ userId }) {
  const [form] = Form.useForm();
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    getTags()
      .then((res) => {
        console.log(res.data);
        setTags(() => formatSelectOptions(res.data));
      })
      .catch((e) => {
        console.log(e);
      });

    getCategories()
      .then((res) => {
        setCategories(() => formatSelectOptions(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const onFinish = (values) => {
    console.log(values);
    setStatus("pending");
    createBlog(values)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          form.resetFields();
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
        <Form.Item label="Content" name="content">
          <TextArea rows={5} />
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Select
            allowClear
            placeholder="Select Category"
            options={categories}
          />
        </Form.Item>
        <Form.Item label="Tags" name="tags">
          <Select
            mode="multiple"
            allowClear
            placeholder="Select Tags"
            options={tags}
          />
        </Form.Item>
        <Form.Item label="Publish" name="published" valuePropName="checked">
          <Switch />
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
