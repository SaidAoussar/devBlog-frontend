import { NavLink } from "react-router-dom";
import { Typography } from "antd";
import { LockOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import "./left-sidebar.css";

const { Text } = Typography;

const LeftSidebar = () => {
  return (
    <nav className="left-sidebar">
      <NavLink
        to="profile"
        className={({ isActive }) => `link ${isActive ? "link--active" : ""}`}
      >
        <Text>
          <UserOutlined />
          Profile
        </Text>
      </NavLink>
      <NavLink
        to="account"
        className={({ isActive }) => `link ${isActive ? "link--active" : ""}`}
      >
        <Text>
          <LockOutlined />
          Account
        </Text>
      </NavLink>
      <NavLink
        to="customization"
        className={({ isActive }) => `link ${isActive ? "link--active" : ""}`}
      >
        <Text>
          <SettingOutlined />
          Customization
        </Text>
      </NavLink>
    </nav>
  );
};

export default LeftSidebar;
