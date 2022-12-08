import React, { ReactNode, useRef } from "react";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalContents from "../ModalContents/ModalContents";
import useOutsideClickHandler from "../../../hooks/useOutsideClickHandler";

interface ModalProps {
  title?: string;
  onClose?: Function;
  children?: ReactNode;
}

const Modal = ({ title, onClose, children }: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleModalClose = (): void => {
    onClose?.();
  };
  useOutsideClickHandler(modalRef, handleModalClose);

  return (
    <ModalContainer>
      <ModalOverlay>
        <ModalWrapper ref={modalRef}>
          <ModalTitle title={title} />
          <ModalContents>{children}</ModalContents>
        </ModalWrapper>
      </ModalOverlay>
    </ModalContainer>
  );
};

export default Modal;
