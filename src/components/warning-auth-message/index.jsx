import { Modal, Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ModalActions = styled.div`
  padding: 24px 0px;

  .ant-btn-primary {
    margin-bottom: 12px;
  }
`;

const WarningAuthMessage = ({ isModalOpenState }) => {
  const [isModalOpen, setIsModalOpen] = isModalOpenState;

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Log in to continue"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <ModalActions>
        <Link to="/login">
          <Button type="primary" size="large" block>
            Login in
          </Button>
        </Link>
        <Link to="/register">
          <Button type="link" size="large" block>
            Create account
          </Button>
        </Link>
      </ModalActions>
    </Modal>
  );
};

export default WarningAuthMessage;
