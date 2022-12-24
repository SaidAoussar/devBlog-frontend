import { useState } from "react";

import { Modal } from "antd";
import { EditFilled } from "@ant-design/icons";

function ModalEditProfile({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  const handleOk = () => setIsModalOpen(false);

  return (
    <>
      <EditFilled
        style={{
          fontSize: "1.2rem",
          cursor: "pointer",
          marginRight: "4px",
          color: "#0d6efd",
        }}
        onClick={showModal}
      />

      <Modal
        title="Update blog"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        {children}
      </Modal>
    </>
  );
}

export default ModalEditProfile;
