import { NavLink } from "react-router-dom";
import { Typography } from "antd";
import { LockOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import "./left-sidebar.css";
import * as S from "./styles";

const { Text } = Typography;

const LeftSidebar = () => {
  return (
    <nav className="left-sidebar">
      <S.NavLinkWrapper to="profile">
        <S.Text>
          <UserOutlined />
          Profile
        </S.Text>
      </S.NavLinkWrapper>
      <S.NavLinkWrapper to="account">
        <S.Text>
          <LockOutlined />
          Account
        </S.Text>
      </S.NavLinkWrapper>
      <S.NavLinkWrapper to="customization">
        <S.Text>
          <SettingOutlined />
          Customization
        </S.Text>
      </S.NavLinkWrapper>
    </nav>
  );
};

export default LeftSidebar;
