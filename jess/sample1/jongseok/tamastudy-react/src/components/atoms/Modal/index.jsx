import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  const content = <>{children}</>;

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default Modal;
