import { useEffect, useState } from "react";
import styled from "styled-components";
import { checkSaved, nbrSavesByPost, toggleSave } from "../../../../api/save";
import BookmarkFilled from "./BookmarkFilled";
import BookmarkOutlined from "./BookmarkOutlined";

const SaveIcon = ({ postId }) => {
  const [savedActive, setSavedActive] = useState(false);
  const [nbrSaves, setNbrSaves] = useState(0);

  useEffect(() => {
    checkSaved(postId)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setSavedActive(res.data.saved);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [savedActive, postId]);

  useEffect(() => {
    nbrSavesByPost(postId)
      .then((res) => {
        if (res.status === 200) {
          setNbrSaves(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [savedActive, postId]);

  const handleToggleSave = () => {
    toggleSave(postId)
      .then((res) => {
        if (res.status === 201) {
          setSavedActive((prevSavedActive) => !prevSavedActive);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="reaction">
      {!savedActive ? (
        <BookmarkOutlined onClick={handleToggleSave} />
      ) : (
        <BookmarkFilled onClick={handleToggleSave} />
      )}
      <Counter active={savedActive}>{nbrSaves}</Counter>
    </div>
  );
};

const Counter = styled.span`
  color: ${(props) => (props.active ? "rgb(79,70,229)" : "575757")};
`;

export default SaveIcon;
