import { useEffect, useState } from "react";
import {
  Form,
  Input,
  Upload,
  Select,
  Button,
  Typography,
  Space,
  Spin,
  Alert,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useAtom } from "jotai";
import Container from "../../components/utils/Container";
import TextEditor from "./components/text-editor/TextEditor";
import { contentFieldAtom } from "./store/content-field";
import "./create-post.css";
import { getTags } from "../../api/Tag";
import { createBlog } from "../../api/Blog";
import ButtonConfirm from "./components/button-confirm/ButtonConfirm";

const { Text } = Typography;
const { TextArea } = Input;

// this function formatting array come from database to select option array shap (ant-design select options)
export function formatSelectOptions(arr) {
  let options = [];
  arr.forEach((tag) => {
    options.push({ value: tag.id, label: tag.name });
  });
  return options;
}

const urlToObject = async (img, name) => {
  const response = await fetch(img);
  // here image is url/location of image
  const blob = await response.blob();
  const file = new File([blob], name, { type: blob.type });
  return file;
};

const CustomCreatePost = ({ post, handleFetch, useStatus, useError }) => {
  const [contentField] = useAtom(contentFieldAtom);
  const [tags, setTags] = useState();
  const [status, setStatus] = useStatus;
  const [error] = useError;
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (post?.cover) {
      urlToObject(
        `${import.meta.env.VITE_URL}/${post?.cover}`,
        post?.cover
      ).then((res) => {
        setFileList([
          {
            url: `${import.meta.env.VITE_URL}/${post?.cover}`,
            originFileObj: res,
          },
        ]);
      });
    }
  }, [post?.cover]);

  useEffect(() => {
    getTags({ paginate: "false" }).then((res) => {
      setTags(() => formatSelectOptions(res.data));
    });
  }, []);

  const onFinish = (values) => {
    setStatus("pending");
    console.log("values", values);
    console.log("cover : ", fileList[0].originFileObj);

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", contentField);
    if (fileList[0]) {
      formData.append("cover", fileList[0].originFileObj);
    }
    if (values.tags) {
      values.tags.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag);
      });
    }

    handleFetch(formData);
  };

  const normFile = (e) => {
    return e?.file;
  };

  const handleUploadChange = ({ fileList, file }) => {
    console.log(fileList);
    console.log("file : ", file);
    setFileList(fileList);

    urlToObject(
      "http://localhost:3000/536a0c05-ad00-418a-aa04-eae3d955199c.png",
      "536a0c05-ad00-418a-aa04-eae3d955199c.png"
    );
  };
  return (
    <div style={{ height: "100vh" }} className="create-post">
      <Container>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "48px",
          }}
        >
          <div className="left-links">
            <Text
              style={{
                fontSize: "24px",
                fontWeight: "700",
                marginRight: "16px",
              }}
            >
              DevBlog
            </Text>
            <Text style={{ fontSize: "16px", fontWeight: "500" }}>
              {post ? "Edit Post" : "Create Post"}
            </Text>
          </div>
          <ButtonConfirm />
        </nav>
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
            style={{ marginBottom: "8px" }}
            message={
              <ul
                style={{
                  paddingLeft: "48px",
                }}
              >
                {error.map((e) => (
                  <li
                    style={{
                      listStyle: "initial",
                    }}
                  >
                    {e}
                  </li>
                ))}
              </ul>
            }
            type="error"
            closable
            onClose={() => setStatus("idle")}
          />
        )}
        {status === "resolved" && (
          <Alert
            message="Post Added with Success"
            type="success"
            closable
            onClose={() => setStatus("idle")}
          />
        )}
        <Form
          onFinish={onFinish}
          initialValues={
            post
              ? {
                  title: post.title,
                  tags: post.tags?.map((tag) => tag.tagId) || [],
                }
              : {}
          }
        >
          <main
            style={{
              backgroundColor: "white",
              height: "calc(100vh - 48px - 56px)",
              borderRadius: "8px",
              boxShadow: "0 0 0 1px #1717171a",
              overflowWrap: "anywhere",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                padding: "0px 48px 32px",
              }}
            >
              <Form.Item
                className="cover"
                name="cover"
                valuePropName="file"
                getValueFromEvent={normFile}
              >
                <Upload
                  className="upload"
                  listType="picture-card"
                  maxCount={1}
                  beforeUpload={() => false}
                  fileList={fileList}
                  onChange={handleUploadChange}
                >
                  {post?.cover ? "change " : "add a "}cover image
                </Upload>
              </Form.Item>
              <Form.Item className="title" name="title">
                <TextArea placeholder="New post title here..."></TextArea>
              </Form.Item>
              <Form.Item name="tags">
                <Select
                  mode="multiple"
                  allowClear
                  options={tags}
                  optionFilterProp="label"
                  placeholder="Add tags..."
                  bordered={false}
                />
              </Form.Item>
            </div>

            <TextEditor />
          </main>

          <footer
            style={{
              height: "56px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              disabled={status === "pending"}
            >
              Publish
            </Button>
          </footer>
        </Form>
      </Container>
    </div>
  );
};

export default CustomCreatePost;
