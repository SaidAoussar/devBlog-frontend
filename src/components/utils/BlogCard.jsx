import { Link } from "react-router-dom";
import { Card, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { RemoveBlog, allBlogsOfUser } from "../../api/Blog";
import { useUserStore } from "../../store/user";

const { Meta } = Card;

function BlogCard({ blog, operation, userId, setBlogs }) {
  const authUser = useUserStore((state) => state.user);
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
          operation && authUser._id === userId
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
          title={
            <Link to={`/blog/${blog._id}`} className="title-card">
              {blog.title}
            </Link>
          }
          description={`${blog.body.slice(0, 100)}`}
        />
      </Card>
    </>
  );
}

export default BlogCard;
