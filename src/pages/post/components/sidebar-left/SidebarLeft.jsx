import ReactionIcon from "../reaction-icon/ReactionIcon";
import SaveIcon from "../save-icon/SaveIcon";
import CommentIcon from "../comment-icon/CommentIcon";

import * as S from "./styles";

const SidebarLeft = ({ postId, commentsCount }) => {
  return (
    <S.SidebarLeft>
      <S.Actions>
        <S.ActionsInner>
          <ReactionIcon postId={postId} />
          <CommentIcon commentsCount={commentsCount} />
          <SaveIcon postId={postId} />
        </S.ActionsInner>
      </S.Actions>
    </S.SidebarLeft>
  );
};

export default SidebarLeft;
