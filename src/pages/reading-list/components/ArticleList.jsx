import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAtom } from "jotai";
import { totalSavesAtom } from "../atom/total-saves";
import { getAllSavePosts, removeSave } from "../../../api/save";
import Article from "./article/Article";

const ArticleList = ({ userId, tagId, query }) => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [_, setTotalSaves] = useAtom(totalSavesAtom);
  useEffect(() => {
    getAllSavePosts(tagId, query)
      .then((res) => {
        if (res.status === 200) {
          setPosts(res.data);
          setTotalSaves(res.data.length);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userId, tagId, query]);

  const onDeleteSave = (saveId) => {
    removeSave(saveId)
      .then((res) => {
        if (res.status === 200) {
          setPosts((prevPosts) => {
            return prevPosts.filter((post) => post.saveId !== saveId);
          });
        }

        if (res.response?.status === 400) {
          throw res.response?.data?.message;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <StyledArticleList>
      {posts.map((post) => {
        return <Article key={post.id} post={post} onDelete={onDeleteSave} />;
      })}
      {posts.length === 0 && <Message>Nothing with this filter 🤔</Message>}
    </StyledArticleList>
  );
};

const StyledArticleList = styled.section`
  background-color: ${(props) => props.theme.cardBg};
  padding-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardBorder};
`;
const Message = styled.h1`
  text-align: center;
  font-size: 18px;
  padding-top: 128px;
  padding-bottom: 128px;
`;

export default ArticleList;
