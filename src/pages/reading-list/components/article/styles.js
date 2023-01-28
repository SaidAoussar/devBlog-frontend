import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "antd";

export const Card = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 8px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 10px;
`;

export const CardImage = styled.img`
  object-fit: cover;
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.cardBorder};
`;

export const CardContent = styled.div``;

export const CardTitle = styled(Link)`
  color: ${(props) => props.theme.linkColor};
  &:hover {
    color: ${(props) => props.theme.linkColorHover};
  }
`;

export const Title = styled(Typography.Title)`
  && {
    color: inherit;
    line-height: 1.25;
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
`;

export const CardDetails = styled.div``;

export const Text = styled(Typography.Text)`
  && {
    color: ${(props) => props.theme.linkColor};
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Dot = styled.span`
  color: ${(props) => props.theme.base[30]};
`;

export const Time = styled.time`
  font-size: 14px;
  color: ${(props) => props.theme.base[60]};
`;

export const Tag = styled(Link)`
  display: inline-block;
  color: ${(props) => props.theme.tagColor};
  font-size: 14px;
  text-decoration: none;
  background-color: transparent;
  padding: 6px 8px;
  border-radius: 6px;

  &:hover {
    color: ${(props) => props.theme.tagColorHover};
    background-color: ${(props) => props.theme.tagBgHover};
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.tagBgHover},
      inset 0 0 0 1px ${(props) => props.theme.tagBgHover},
      inset 0 0 0 1px ${(props) => props.theme.tagBgHover};
  }
`;
