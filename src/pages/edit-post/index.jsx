import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomCreatePost from "../../components/custom-create-post";
import { Provider } from "jotai";
import { contentFieldAtom } from "../../components/custom-create-post/store/content-field";
import { updateBlog, getPostBySlug } from "../../api/Blog";

const EditPost = () => {
  const { username, slug } = useParams();
  const [post, setPost] = useState(null);
  const [postStatus, setPostStatus] = useState("idle");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setPostStatus("pending");
    getPostBySlug(slug)
      .then((res) => {
        if (res.status === 200) {
          setPost(res.data);
          setPostStatus("resolved");
        }

        if (res.response?.status === 400) {
          throw new Error(res.response.data.message);
        }
      })
      .catch((e) => {
        setPostStatus("rejected");
      });
  }, [slug]);

  useEffect(() => {
    if (postStatus === "rejected") {
      navigate("/", { replace: true });
    }
  }, [navigate, postStatus]);

  const handleFetch = (values) => {
    updateBlog(slug, values)
      .then((res) => {
        if (res.status === 200) {
          setStatus("resolved");
        }
      })
      .catch((e) => {
        setStatus("rejected");
      });
  };
  if (postStatus === "resolved") {
    return (
      <div>
        <Provider initialValues={[[contentFieldAtom, post.content]]}>
          <CustomCreatePost
            post={post}
            handleFetch={handleFetch}
            useStatus={[status, setStatus]}
            useError={[error, setError]}
          />
        </Provider>
      </div>
    );
  }
};

export default EditPost;
