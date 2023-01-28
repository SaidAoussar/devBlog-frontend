import { Typography } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkWrapper = styled(NavLink)`
  && {
    display: block;
    color: ${(props) => props.theme.linkColor};
    padding: 8px;
    border-radius: 6px;
    &:hover {
      color: ${(props) => props.theme.linkColorHover};
      background-color: ${(props) => props.theme.linkBgHover};
    }

    &.active {
      color: ${(props) => props.theme.linkColorCurrent};
      background-color: ${(props) => props.theme.linkBgCurrent};
      font-weight: 500;
    }

    &.active:hover {
      color: ${(props) => props.theme.linkColorCurrent};
      background-color: ${(props) => props.theme.linkBgCurrent};
    }
  }
`;

export const Text = styled(Typography.Text)`
  && {
    color: inherit;
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 16px;

    .anticon {
      font-size: 22px;
    }
  }
`;
