import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card as OldCard,
  Tooltip,
  OverlayTrigger,
  Modal as OldModal,
  Button,
} from "react-bootstrap";

import { toast } from "react-toastify";
import { Card, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { AppContext } from "../../context/AppContext";
import { RemoveBlog, allBlogsOfUser } from "../../api/Blog";
import { createContext } from "react";

const { Meta } = Card;

const ReachableContext = createContext(null);

function BlogCard({ blog, operation, userId, setBlogs }) {
  let navigate = useNavigate();

  const context = useContext(AppContext);
  const [user, setUser] = context.useUser;
  // show and hide modal

  const handleShow = () =>
    Modal.confirm({
      title: "Use Hook!",
      content: (
        <div>
          Do you want to delete blog with title :
          <p>
            <strong>{blog.title}</strong>
          </p>
        </div>
      ),
      onOk: () => removeBlog(),
      okText: "delete",
      okButtonProps: { style: { backgroundColor: "red" } },
    });

  const removeBlog = () => {
    RemoveBlog(blog._id)
      .then((res) => {
        if (res.data) {
          toast.success(`${res.data.title} deleted with success`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
          });
          allBlogsOfUser(userId)
            .then((res) => {
              setBlogs(res.data);
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          toast.error("something wrong", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((e) => {
        toast.error("something wrong", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <>
      <Card
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={
          operation && user._id == userId
            ? [
                <Link to={`/profile/${userId}/blogs/${blog._id}/edit`}>
                  <EditOutlined />
                </Link>,
                <DeleteOutlined onClick={handleShow} />,
              ]
            : []
        }
      >
        <Meta
          title={`${blog.title}`}
          description={`${blog.body.slice(0, 100)}`}
        />
      </Card>
    </>
  );
}

export default BlogCard;
