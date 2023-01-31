import { Link } from "react-router-dom";
import { Button as ButtonAnt, Typography } from "antd";
import styled from "styled-components";

export const Comment = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 10px;
  margin-bottom: 24px;
`;

export const ImageLink = styled(Link)`
  position: relative;
  display: inline-block;
  height: 32px;
  width: 32px;
  border-radius: 100%;
  vertical-align: middle;
  &::after {
    content: "";
    border: 1px solid rgb(64, 64, 64);
    opacity: 0.15;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 100%;
  }
`;
export const Image = styled.img`
  object-fit: cover;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  display: inline-block;
  vertical-align: bottom;
`;

export const Content = styled.div`
  padding: 4px 12px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardBorder};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled(ButtonAnt)`
  && {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.btnGhostColor};
    background-color: ${(props) => props.theme.btnGhostBg};
    padding: 4px;

    &:hover {
      color: ${(props) => props.theme.btnGhostColorHover};
      background-color: ${(props) => props.theme.btnGhostBgHover};
    }
  }
`;

export const SeparateDot = styled.span`
  color: #bdbdbd;
  margin-right: 8px;
  font-size: 18px;
  font-weight: 900;
`;
export const PublishDate = styled(Typography.Text)`
  && {
    color: rgb(113, 113, 113);
  }
`;

export const Description = styled(Typography.Paragraph)`
  && {
    color: ${(props) => props.theme.cardColor};
    margin-top: 8px;
    font-size: 16px;
  }
`;
