import { Typography } from "antd";
import { FileTextOutlined, MessageOutlined } from "@ant-design/icons";
import "./sidebar.css";
import { useEffect, useState } from "react";
import { nbrPostsOfUser } from "../../../../api/Blog";
import { nbrCommentsOfUser } from "../../../../api/Comment";

const { Text } = Typography;
const SideBar = ({ userId }) => {
  const [nbrPosts, setNbrPosts] = useState(0);
  const [nbrComments, setNbrComments] = useState(0);
  useEffect(() => {
    nbrPostsOfUser(userId)
      .then((res) => {
        setNbrPosts(res.data.nbrPosts);
      })
      .catch((e) => {
        console.log(e);
      });

    nbrCommentsOfUser(userId)
      .then((res) => {
        setNbrComments(res.data.nbrComments);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__card">
        <div className="item">
          <FileTextOutlined />
          <Text>{nbrPosts} posts published</Text>
        </div>
        <div className="item">
          <MessageOutlined />
          <Text>{nbrComments} comments written</Text>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
