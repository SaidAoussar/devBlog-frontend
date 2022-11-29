import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card as OldCard,
  Tooltip,
  OverlayTrigger,
  Modal,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { Card } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { AppContext } from "../../context/AppContext";
import { RemoveBlog, allBlogsOfUser } from "../../api/Blog";

const { Meta } = Card;

function BlogCard({ blog, operation, userId, setBlogs }) {
  let navigate = useNavigate();

  const context = useContext(AppContext);
  const [user, setUser] = context.useUser;
  // show and hide modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeBlog = () => {
    RemoveBlog(blog._id)
      .then((res) => {
        if (res.data) {
          toast.success(`${res.data.title} deleted with success`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
          });
          setShow(false);
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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to delete blog with title :
          <p>
            <strong>{blog.title}</strong>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={removeBlog}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BlogCard;
