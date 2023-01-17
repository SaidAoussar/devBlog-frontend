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
import "./create-post.css";
import { getTags } from "../../api/Tag";
import { createBlog } from "../../api/Blog";
import { contentFieldAtom } from "./store/content-field";
import ButtonConfirm from "./components/button-confirm/ButtonConfirm";
import CustomCreatePost from "../../components/custom-create-post";

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

const CreatePost = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleFetch = (formData, resetFields) => {
    createBlog(formData)
      .then((res) => {
        if (res.status === 201) {
          resetFields();
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
    <div>
      <CustomCreatePost
        handleFetch={handleFetch}
        useStatus={[status, setStatus]}
        useError={[error, setError]}
      />
    </div>
  );
};

export default CreatePost;
