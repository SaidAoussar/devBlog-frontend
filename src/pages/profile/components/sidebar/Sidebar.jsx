import { Typography } from "antd";
import { FileTextOutlined, MessageOutlined } from "@ant-design/icons";
import "./sidebar.css";

const { Text } = Typography;
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__card">
        <div className="item">
          <FileTextOutlined />
          <Text>14 posts published</Text>
        </div>
        <div className="item">
          <MessageOutlined />
          <Text>991 comments written</Text>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
