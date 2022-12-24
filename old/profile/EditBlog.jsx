import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import { ArrowLeftOutlined } from "@ant-design/icons";
import { allTags } from "../../components/utils/tagsData";
import { getBlog, updateBlog } from "../../api/Blog";
import { formatSelectOptions } from "./CreateBlog";
import { getTags } from "../../api/Tag";
import { getCategories } from "../../api/Category";

const { TextArea } = Input;

function EditBlog({ userId }) {
  const { blogid } = useParams();
  const [form] = Form.useForm();
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  const [blogStatus, setBlogStatus] = useState("idle");
  const [blogError, setBlogError] = useState(null);

  const [updateStatus, setUpdateStatus] = useState("idle");
  const [updateError, setUpdateError] = useState(null);

  let navigate = useNavigate();

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

  useEffect(() => {
    setBlogStatus("pending");
    getBlog(blogid)
      .then((res) => {
        console.log(
          formatSelectOptions(res.data.category ? [res.data.category] : [])
        );
        console.log("tags", res.data);
        if (res.status === 200) {
          /*setTimeOut is bad solution for this error `Warning: Instance created by `useForm` is not connect to any Form element` if u take off setTimeout u well get tha warning.
          there is other solution is add `initialValues` prop to the component Form */
          setTimeout(() => {
            form.setFieldsValue({
              title: res.data.title,
              content: res.data.content,
              //tags: formatSelectOptions(res.data.tags || []),
              tags: res.data.tags.map((tag) => tag.id),
              categoryId: res.data.categoryId,
              published: res.data.published,
            });
          }, 0);

          setBlogStatus("resolved");
        }
        if (res.response?.status === 400) {
          throw res.response.data.message;
        }
      })
      .catch((e) => {
        setBlogError(e);
        setBlogStatus("rejected");
      });
  }, [blogid]);

  const onFinish = (values) => {
    console.log(values);
    if (!values.categoryId) {
      values = { ...values, categoryId: -1 };
    }
    console.log("after update values", values);

    setUpdateStatus("pending");
    updateBlog(blogid, values)
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
            <Form.Item label="Content" name="content">
              <TextArea rows={7} />
            </Form.Item>
            <Form.Item label="Category" name="categoryId">
              <Select
                allowClear
                placeholder="Update Category"
                options={categories}
              />
            </Form.Item>
            <Form.Item label="tags" name="tags">
              <Select
                mode="multiple"
                allowClear
                placeholder="Update Tags"
                options={tags}
              />
            </Form.Item>
            <Form.Item label="Publish" name="published" valuePropName="checked">
              <Switch />
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
