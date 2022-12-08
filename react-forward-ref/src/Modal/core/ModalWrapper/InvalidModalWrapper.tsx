import React, { ReactNode, RefObject } from "react";

import "./ModalWrapper.css";

interface ModalWrapperProps {
  ref: RefObject<HTMLDivElement>;
  children: ReactNode;
}

const InvalidModalWrapper = ({ ref, children }: ModalWrapperProps): JSX.Element => {
  return (
    <div className="modal-wrapper" ref={ref}>
      {children}
    </div>
  );
};

export default InvalidModalWrapper;
