import { useEffect, useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import styled from "styled-components";
import {
  checkReacted,
  toggleReaction,
  nbrReactionsByPost,
} from "../../../../api/post-reactions";
import { useUserStore } from "../../../../store/user";
import WarningAuthMessage from "components/warning-auth-message";
import { Reaction } from "../sidebar-left/styles";

const ReactionIcon = ({ postId }) => {
  const [reactionActive, setReactionActive] = useState(false);
  const [nbrReactions, setNbrReactions] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authUser = useUserStore((state) => state.user);

  useEffect(() => {
    if (Object.keys(authUser).length !== 0) {
      checkReacted(postId)
        .then((res) => {
          if (res?.status === 200) {
            setReactionActive(res.data?.reacted);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [postId]);

  useEffect(() => {
    nbrReactionsByPost(postId)
      .then((res) => {
        if (res.status === 200) {
          setNbrReactions(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [reactionActive, postId]);

  const handleToggleReaction = () => {
    if (Object.keys(authUser).length === 0) {
      console.log("not auth");
      setIsModalOpen(true);
    } else {
      toggleReaction({
        postId,
      })
        .then((res) => {
          if (res.status === 201) {
            setReactionActive((prevReactionActive) => !prevReactionActive);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <>
      <WarningAuthMessage isModalOpenState={[isModalOpen, setIsModalOpen]} />
      <LikeReaction className={`${reactionActive ? "user-activated" : ""}`}>
        {!reactionActive ? (
          <HeartOutlined onClick={handleToggleReaction} />
        ) : (
          <HeartFilled onClick={handleToggleReaction} className="" />
        )}
        <Count $active={reactionActive}>{nbrReactions}</Count>
      </LikeReaction>
    </>
  );
};

const LikeReaction = styled(Reaction)`
  .anticon.anticon-heart {
    color: ${(props) => props.theme.btnGhostColor};
  }
  &:hover {
    .anticon.anticon-heart {
      color: rgb(220, 38, 38);
      background-color: rgba(220, 38, 38, 0.1);
    }
  }

  &.user-activated {
    .anticon.anticon-heart {
      color: rgb(220, 38, 38);
      background-color: rgba(220, 38, 38, 0.1);
      box-shadow: inset 0 0 0 2px rgb(220, 38, 38);
    }
  }
`;

const Count = styled.span`
  color: ${(props) =>
    props.$active ? "rgb(220, 38, 38)" : props.theme.btnGhostColor};
`;

export default ReactionIcon;
