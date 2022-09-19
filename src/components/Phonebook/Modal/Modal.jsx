import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ onClose, children }) => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);
    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  });

  const hendleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  const hendleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={styles.overlay} onClick={hendleBackDropClick}>
      <div className={styles.modal__content}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;