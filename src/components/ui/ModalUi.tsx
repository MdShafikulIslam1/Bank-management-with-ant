import { setOpen } from "@/redux/feature/modal/modalSlice";
import { useAppDispatch } from "@/redux/hook";
import { Modal } from "antd";
import { ReactElement, ReactNode } from "react";

interface IModal {
  isOpen: boolean;
  title?: string | ReactNode;
  children: ReactElement;
  handleOk?: () => void;
  showCancelButton?: boolean;
  showOkButton?: boolean;
}

const ModalUi = ({
  isOpen,
  title,
  children,
  handleOk,
  showCancelButton = true,
  showOkButton = true,
}: IModal) => {
  const dispatch = useAppDispatch();
  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={handleOk}
      onCancel={() => dispatch(setOpen(false))}
      cancelButtonProps={{
        style: { display: showCancelButton ? "inline" : "none" },
      }}
      okButtonProps={{ style: { display: showOkButton ? "inline" : "none" } }}
    >
      {children}
    </Modal>
  );
};

export default ModalUi;
