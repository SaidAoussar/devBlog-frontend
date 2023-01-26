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
import { useAtom } from "jotai";
import Container from "../../components/utils/Container";
import TextEditor from "./components/text-editor/TextEditor";
import { contentFieldAtom } from "./store/content-field";
import { getTags } from "../../api/Tag";
import ButtonConfirm from "./components/button-confirm/ButtonConfirm";
import * as S from "./styles";

const { Text } = Typography;
const { TextArea } = Input;
const { Item } = Form;

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
  const [form] = Form.useForm();
  const [contentField, setContentField] = useAtom(contentFieldAtom);
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

    handleFetch(formData, resetFields);
  };

  const normFile = (e) => {
    return e?.file;
  };

  const resetFields = () => {
    form.resetFields();
    setContentField("");
    setFileList([]);
  };

  const handleUploadChange = ({ fileList, file }) => {
    setFileList(fileList);
  };
  return (
    <S.CustomCreatePost>
      <Container>
        <S.Nav>
          <S.LeftNav>
            <S.Logo>DevBlog</S.Logo>
            <S.ActionText>{post ? "Edit Post" : "Create Post"}</S.ActionText>
          </S.LeftNav>
          <ButtonConfirm />
        </S.Nav>
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
          form={form}
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
          <S.FormMain>
            <S.FormMainTop>
              <S.Item
                name="cover"
                valuePropName="file"
                getValueFromEvent={normFile}
              >
                <S.Upload
                  className="upload"
                  listType="picture-card"
                  maxCount={1}
                  beforeUpload={() => false}
                  fileList={fileList}
                  onChange={handleUploadChange}
                >
                  {post?.cover ? "change " : "add a "}cover image
                </S.Upload>
              </S.Item>
              <S.Item
                name="title"
                style={{ minHeight: "62px", maxHeight: "62px" }}
              >
                <S.TextArea placeholder="New post title here..."></S.TextArea>
              </S.Item>
              <S.Item name="tags">
                <S.Select
                  mode="multiple"
                  allowClear
                  options={tags}
                  optionFilterProp="label"
                  placeholder="Add tags..."
                  bordered={false}
                />
              </S.Item>
            </S.FormMainTop>

            <TextEditor />
          </S.FormMain>

          <S.FormFooter>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              disabled={status === "pending"}
            >
              Publish
            </Button>
          </S.FormFooter>
        </Form>
      </Container>
    </S.CustomCreatePost>
  );
};

export default CustomCreatePost;
