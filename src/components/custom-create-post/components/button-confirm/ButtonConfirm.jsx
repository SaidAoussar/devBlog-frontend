import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button as ButtonAnt, Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { useUserStore } from "../../../../store/user";

const Button = styled(ButtonAnt)`
  && {
    color: ${(props) => props.theme.bodyColor};
    &:hover {
      color: ${(props) => props.theme.btnGhostColorHover};
      background-color: ${(props) => props.theme.btnGhostBgHover};
    }
  }
`;

const ButtonConfirm = () => {
  const authUser = useUserStore((state) => state.user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Button type="text" onClick={() => setOpen(true)}>
        <CloseOutlined />
      </Button>
      <Modal
        title="You have unsaved changes"
        open={open}
        onOk={() => navigate(`/${authUser.username}`)}
        onCancel={() => setOpen(false)}
        okButtonProps={{
          className: "ant-btn-dangerous",
        }}
        okText="Yes, leave the page"
        cancelText="No, keep editing"
      >
        <p>
          You've made changes to your post. Do you want to navigate to leave
          this page?
        </p>
      </Modal>
    </>
  );
};

export default ButtonConfirm;
