import { useState } from "react";

import { createBlog } from "../../api/Blog";

import CustomCreatePost from "../../components/custom-create-post";

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
