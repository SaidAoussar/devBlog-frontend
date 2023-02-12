import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Tag } from "antd";
import { format } from "date-fns";
import {
  HeartOutlined,
  MessageOutlined,
  BookOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import SaveIcon from "./save-icon/SaveIcon";

const { Title, Text } = Typography;
const PreviewContainer = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  padding: 20px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardBorder};
`;
const PreviewTop = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  margin-bottom: 8px;
`;
const PreviewImg = styled.img`
  border-radius: 100%;
  border: ${(props) => `solid 1px ${props.theme.cardColorTertiary}`};
`;
const PreviewTopTitleLink = styled(Link)`
  color: ${(props) => props.theme.btnGhostColor};
  display: block;
  padding: 4px;
  border-radius: 3px;
  &:hover {
    background-color: ${(props) => props.theme.btnGhostBgHover};
  }
  .ant-typography {
    color: ${(props) => props.theme.btnGhostColor};
    margin: 0px;
    font-size: 14px;
  }
`;
const PreviewTopDate = styled(Link)`
  color: ${(props) => props.theme.cardColorTertiary};
  font-size: 14px;
  &:hover {
    color: ${(props) => props.theme.cardColor};
  }
`;

const PreviewBody = styled.div`
  margin-left: 44px;
`;
const PreviewTitle = styled(Title)`
  && {
    margin: 0px 0px 8px;
  }
  a {
    color: ${(props) => props.theme.cardColor};
    font-weight: 700;
    font-size: 23px;
    line-height: 1.25;
    margin-bottom: 4px;
  }
  a:hover {
    color: ${(props) => props.theme.linkColorHover};
  }
`;

const PreviewTags = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

const PreviewTag = styled(Text)`
  && {
    color: ${(props) => props.theme.tagColor};
    display: inline-block;
    padding: 4px 7px;
    border-radius: 6px;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.tagColorHover};
      background-color: ${(props) => props.theme.tagBgHover};
      box-shadow: ${(
        props
      ) => `inset 0 0 0 2px ${props.theme.tagBgHover}, inset 0 0 0 2px ${props.theme.tagBgHover},
        inset 0 0 0 2px ${props.theme.tagBgHover}`};
    }

    &:hover span.prefix {
      color: ${(props) => props.theme.tagPrefixHover};
    }
  }
  span.prefix {
    color: ${(props) => props.theme.tagPrefix};
  }
`;

const PreviewBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PreviewReactions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;
const PreviewSave = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
const PreviewSaveText = styled(Text)`
  && {
    font-size: 12px;
    color: ${(props) => props.theme.cardColorTertiary};
  }
`;

const Reaction = styled(Link)`
  display: inline-block;
  color: ${(props) => props.theme.btnGhostColor};
  font-size: 14px;
  padding: 4px 12px;
  border-radius: 6px;
  &:hover {
    background-color: ${(props) => props.theme.btnGhostBgHover};
  }
`;

const ReactionText = styled.span`
  color: ${(props) => props.theme.btnGhostColor};
`;
const SaveButton = styled.button`
  padding: 8px;
  color: ${(props) => props.theme.btnColor};
  background-color: ${(props) => props.theme.btnBg};
  cursor: pointer;
  border: none;
  border-radius: 6px;
  &:hover {
    color: ${(props) => props.theme.btnColorHover};
    background-color: ${(props) => props.theme.btnBgHover};
  }
`;

const PreviewPost = React.forwardRef(({ post }, ref) => {
  const { id, title, slug, createdAt, author, tags } = post;
  return (
    <PreviewContainer ref={ref}>
      <article>
        <PreviewTop>
          <PreviewImg
            src={`${import.meta.env.VITE_URL}/${author.img}`}
            alt="said"
            width="34"
            height="34"
          />
          <div>
            <PreviewTopTitleLink>
              <Title level={5}>
                {author.firstName} {author.lastName}
              </Title>
            </PreviewTopTitleLink>
            <PreviewTopDate>
              <time dateTime={createdAt}>
                {format(new Date(createdAt), "MMM d, y")}
              </time>
            </PreviewTopDate>
          </div>
        </PreviewTop>
        <PreviewBody>
          <PreviewTitle level={3}>
            <Link to={`/${author.username}/${slug}`}>{title} </Link>
          </PreviewTitle>

          <PreviewTags>
            {tags.map((t) => (
              <PreviewTag key={t.tag.id}>
                <span className="prefix">#</span>
                {t.tag.name}
              </PreviewTag>
            ))}
          </PreviewTags>
          <PreviewBottom>
            <PreviewReactions>
              <Reaction>
                <HeartOutlined style={{ marginRight: "8px" }} />
                <ReactionText>{post._count?.reactions} reactions</ReactionText>
              </Reaction>
              <Reaction>
                <MessageOutlined style={{ marginRight: "8px" }} />
                <ReactionText> {post._count?.comments} comments</ReactionText>
              </Reaction>
            </PreviewReactions>
            <PreviewSave>
              {/* <PreviewSaveText>9 min</PreviewSaveText> */}
              {/* <SaveButton type="text" size="small"> */}
              <SaveIcon postId={post.id} />
              {/* </SaveButton> */}
            </PreviewSave>
          </PreviewBottom>
        </PreviewBody>
      </article>
    </PreviewContainer>
  );
});

export default PreviewPost;
