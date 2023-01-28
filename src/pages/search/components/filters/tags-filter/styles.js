import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";

import { Typography } from "antd";

export const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.theme.cardBg};
  padding: 20px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardBorder};
`;

export const HashIconWrapper = styled.div`
  background-color: ${(props) => props.theme.tagBg};
  color: ${(props) => props.theme.tagColor};
  padding: 8px;
  border-radius: 6px;

  svg {
    vertical-align: bottom;
  }
`;

export const Title = styled(Typography.Title)`
  && {
    margin: 0;
    font-weight: 700;
  }
`;

export const Link = styled(LinkRouter)`
  && {
    display: inline-block;
    color: ${(props) => props.theme.linkColor};
    background-color: ${(props) => props.theme.linkBg};

    &:hover {
      color: ${(props) => props.theme.linkBrandedColorHover};
      text-decoration: underline;
    }
  }
`;
