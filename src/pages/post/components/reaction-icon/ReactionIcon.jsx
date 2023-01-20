import { useEffect, useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import {
  checkReacted,
  toggleReaction,
  nbrReactionsByPost,
} from "../../../../api/post-reactions";
const ReactionIcon = ({ postId }) => {
  const [reactionActive, setReactionActive] = useState(false);
  const [nbrReactions, setNbrReactions] = useState(0);

  useEffect(() => {
    checkReacted(postId)
      .then((res) => {
        if (res.status === 200) {
          setReactionActive(res.data?.reacted);
        }
      })
      .catch((e) => {
        console.log(e);
      });
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
  };
  return (
    <div className={`reaction ${reactionActive ? "user-activated" : ""}`}>
      {!reactionActive ? (
        <HeartOutlined onClick={handleToggleReaction} />
      ) : (
        <HeartFilled onClick={handleToggleReaction} className="" />
      )}
      <span className="reaction__count">{nbrReactions}</span>
    </div>
  );
};

export default ReactionIcon;
