import styled from "styled-components";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { device } from "../../../../utils/device";
export const Tag = styled.div`
  padding: 24px;
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardBorder};
  border-top: 16px solid #2965f1;
  margin-bottom: 16px;

  @media ${device.md} {
    margin-bottom: 0px;
  }
`;

export const TitleLink = styled(Link)`
  display: inline-block;
  color: ${(props) => props.theme.tagColor};
  padding: 4px 8px;
  margin-left: -8px;
  border-radius: 6px;

  &:hover {
    color: ${(props) => props.theme.tagColorHover};
    background: ${(props) => props.theme.tagBgHover};
    box-shadow: inset 0 0 0 1px rgba(247, 223, 30, 0.1),
      inset 0 0 0 1px rgba(247, 223, 30, 0.1),
      inset 0 0 0 1px rgba(247, 223, 30, 0.1);
  }
`;

export const Prefix = styled.span`
  color: ${(props) => props.theme.tagPrefix};
`;

export const Title = styled(Typography.Title)`
  && {
    color: inherit;
    font-size: 19px;
    font-weight: 700;
    line-height: 28px;
    margin: 0px;
  }
`;

export const Paragraph = styled(Typography.Paragraph)`
  color: ${(props) => props.theme.cardColor};
`;
