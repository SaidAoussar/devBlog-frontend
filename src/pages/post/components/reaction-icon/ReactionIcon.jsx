import { useEffect, useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import {
  checkReacted,
  toggleReaction,
  nbrReactionsByPost,
} from "../../../../api/post-reactions";
import { useUserStore } from "../../../../store/user";
import WarningAuthMessage from "../../../../components/warning-auth-message";
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
      <div className={`reaction ${reactionActive ? "user-activated" : ""}`}>
        {!reactionActive ? (
          <HeartOutlined onClick={handleToggleReaction} />
        ) : (
          <HeartFilled onClick={handleToggleReaction} className="" />
        )}
        <span className="reaction__count">{nbrReactions}</span>
      </div>
    </>
  );
};

export default ReactionIcon;
