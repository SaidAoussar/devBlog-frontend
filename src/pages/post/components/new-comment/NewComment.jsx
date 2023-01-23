import { useState } from "react";
import { Alert, Button } from "antd";
import ReactQuill from "react-quill";
import { useUserStore } from "../../../../store/user";
import { createComment } from "../../../../api/Comment";
import { useAtom } from "jotai";
import { commentsAtom } from "../../atom/comments";

const NewComment = ({ postId }) => {
  const authUser = useUserStore((state) => state.user);
  const [comments, setComments] = useAtom(commentsAtom);
  const [newComment, setNewComment] = useState("");
  const [status, setStatus] = useState("idle");
  const handleNewComment = () => {
    setStatus("pending");
    createComment({
      postId,
      content: newComment,
    })
      .then((res) => {
        if (res.status === 201) {
          setComments((prevComments) => [res.data, ...prevComments]);
          setNewComment("");

          setStatus("resolved");
        }
        console.log(res);
      })
      .catch((e) => {
        setStatus("rejected");
      });
  };

  return (
    <>
      {status === "rejected" && (
        <Alert
          type="error"
          message="Something go wrong"
          closable
          style={{ margin: "8px 0px" }}
        />
      )}
      {status === "resolved" && (
        <Alert
          type="success"
          message="Your comment added with success"
          closable
          style={{ margin: "8px 0px" }}
        />
      )}

      <div className="wrapper-new-comment">
        <div className="avatar">
          <img
            src={`${import.meta.env.VITE_URL}/${authUser.img}`}
            alt=""
            height="32"
            width="32"
          />
        </div>
        <div className="new-comment">
          <form>
            <ReactQuill
              theme="snow"
              value={newComment}
              onChange={setNewComment}
            />
            <Button
              type="primary"
              onClick={handleNewComment}
              disabled={status === "pending"}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewComment;
