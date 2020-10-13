import React from "react";
import { Modal } from "antd";

interface IProps {
  title?: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: React.ReactNode;
}

const ContentsModal: React.FC<IProps> = ({
  visible,
  setVisible,
  title = "title",
  children,
}) => {
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={<div />}
    >
      {children}
    </Modal>
  );
};
export default ContentsModal;
