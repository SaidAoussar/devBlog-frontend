import { Typography } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/device";
export const Layout = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 12px;
  padding: 16px;

  @media ${device.md} {
    grid-template-columns: 4rem minmax(0, 7fr) 3fr;
  }
`;

export const Content = styled.div``;

export const Article = styled.article`
  position: relative;
  color: ${(props) => props.theme.cardColor};
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 10px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardBorder};
`;

export const Cover = styled.img`
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
`;

export const Meta = styled.div`
  padding: 32px 64px 0px 64px;
`;

export const WrapperDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Details = styled.div`
  display: flex;
  gap: 10px;
`;

export const Avatar = styled.img`
  object-fit: cover;
  border-radius: 100%;
`;

export const AuthorName = styled(Typography.Text)`
  && {
    color: ${(props) => props.theme.linkColor};
    font-size: 16px;
    font-weight: 700;
    display: block;
  }
`;
export const PublishDate = styled(Typography.Text)`
  && {
    color: ${(props) => props.theme.base[60]};
    font-size: 12px;
    font-weight: 400;
    display: block;
  }
`;

export const AuthorActions = styled.div`
  background-color: ${(props) => props.theme.accentWarningA10};
  border: 1px solid ${(props) => props.theme.accentWarningA10};
  padding: 4px;
  border-radius: 6px;
`;

export const EditLink = styled(Link)`
  display: inline-block;
  color: ${(props) => props.theme.btnGhostColor};
  background-color: ${(props) => props.theme.btnGhostBg};

  border-radius: 6px;
  padding: 6px 8px;

  &:hover {
    background-color: ${(props) => props.theme.btnGhostBgHover};
  }
`;

export const Title = styled(Typography.Title)`
  && {
    color: ${(props) => props.theme.cardColor};
    font-weight: 800;
    margin-top: 0px;
    margin-bottom: 8px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled(Link)`
  font-size: 16px;
  color: ${(props) => props.theme.tagColor};
  padding: 4px 8px;
  background: transparent;
  border-radius: 6px;

  &:hover {
    color: ${(props) => props.theme.tagColorHover};
    background-color: ${(props) => props.theme.tagBgHover};
    box-shadow: ${(
      props
    ) => `inset 0 0 0 2px ${props.theme.tagBgHover}, inset 0 0 0 2px ${props.theme.tagBgHover},
        inset 0 0 0 2px ${props.theme.tagBgHover}`};
  }

  &:hover span {
    color: ${(props) => props.theme.tagPrefixHover};
  }
`;

export const TagPrefix = styled.span`
  color: ${(props) => props.theme.tagPrefix};
`;

export const Main = styled.div`
  padding: 32px 64px;
`;

export const Comments = styled.section`
  padding: 32px 64px;
`;

export const CommentsTitle = styled(Typography.Title)`
  && {
    color: ${(props) => props.theme.cardColor};
  }
`;
