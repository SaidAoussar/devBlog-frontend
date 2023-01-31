import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "antd";

export const SidebarRight = styled.aside``;

export const SidebarRightInner = styled.div`
  position: sticky;
  top: 70px;
`;

export const Card = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;
  background-color: ${(props) => props.theme.cardSecondaryBg};
  border-top: 32px solid #726fbf;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardSecondaryBorder};
  border-radius: 8px;
`;

export const Header = styled.div`
  margin-top: -30px;
`;

export const Link = styled(RouterLink)`
  display: flex;
  column-gap: 4px;
`;
export const WrapperImage = styled.span`
  margin-right: 8px;
  height: 48px;
  width: 48px;
  display: inline-block;
  border-radius: 100%;
`;
export const Image = styled.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  display: inline-block;
  vertical-align: bottom;
`;
export const SubTitle = styled(Typography.Text)`
  && {
    color: ${(props) => props.theme.linkColor};
    font-size: 18px;
    font-weight: 700;
    margin-top: 20px;
  }
`;
export const Description = styled(Typography.Paragraph)`
  && {
    color: ${(props) => props.theme.base[70]};
    line-height: 24px;
    font-size: 16px;
    margin-bottom: 0px;
  }
`;

export const Details = styled.div``;
export const Key = styled(Typography.Text)`
  && {
    display: block;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.cardColorTertiary};
  }
`;

export const Value = styled(Typography.Text)`
  && {
    display: block;
    color: ${(props) => props.theme.cardSecondaryColor};
    font-size: 16px;
  }
`;
