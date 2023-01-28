import { Typography } from "antd";
import styled from "styled-components";

export const Tag = styled.div``;

export const Header = styled.header`
  background-color: ${(props) => props.theme.cardBg};
  padding: 12px;
  border-top: 16px solid #2965f1;
  margin-bottom: 8px;
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardBorder};
`;

export const Title = styled(Typography.Title)`
  && {
    color: ${(props) => props.theme.cardColor};
    font-weight: 800;
    line-height: 45px;
    margin: 0;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: 20px;
`;

export const Sidebar = styled.aside``;
export const Widget = styled.div`
  position: relative;
  padding: 0px 16px 16px;
  margin: 8px 0px 8px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.base[70]};
    opacity: 0.25;
  }
`;
export const SidebarData = styled.div`
  padding: 16px;
`;

export const Text = styled(Typography.Text)`
  color: ${(props) => props.theme.base[70]};
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;
`;
