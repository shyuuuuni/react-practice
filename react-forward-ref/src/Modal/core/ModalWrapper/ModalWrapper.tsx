import React, { forwardRef, ReactNode } from "react";

import "./ModalWrapper.css";

interface ModalWrapperProps {
  children: ReactNode;
}

const ModalWrapper = forwardRef<HTMLDivElement, ModalWrapperProps>(
  ({ children }, ref): JSX.Element => {
    return (
      <div className="modal-wrapper" ref={ref}>
        {children}
      </div>
    );
  }
);

export default ModalWrapper;
