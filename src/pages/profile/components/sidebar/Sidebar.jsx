import { Typography } from "antd";
import { useAtom } from "jotai";
import { FileTextOutlined, MessageOutlined } from "@ant-design/icons";
import { userAtom } from "../../store/user";
import "./sidebar.css";
import { useEffect, useState } from "react";

const { Text } = Typography;
const SideBar = ({ userId }) => {
  const [user] = useAtom(userAtom);
  console.log(user);
  return (
    <div className="sidebar">
      <div className="sidebar__card">
        <div className="item">
          <FileTextOutlined />
          <Text>{user._count?.posts} posts published</Text>
        </div>
        <div className="item">
          <MessageOutlined />
          <Text>{user._count?.comments} comments written</Text>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
