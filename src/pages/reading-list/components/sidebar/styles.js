import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = styled.aside``;

export const Link = styled(RouterLink)`
  color: ${(props) => props.theme.linkColor};
  padding: 8px;
  display: block;
  border-radius: 6px;

  &:hover {
    color: ${(props) => props.theme.linkColorHover};
    background-color: ${(props) => props.theme.linkBgHover};
  }

  &.active {
    font-weight: 500;
    color: ${(props) => props.theme.linkColorCurrent};
    background-color: ${(props) => props.theme.linkBgCurrent};
  }

  &.active:hover {
    font-weight: 500;
    color: ${(props) => props.theme.linkColorCurrent};
    background-color: ${(props) => props.theme.linkBgCurrent};
  }
`;
