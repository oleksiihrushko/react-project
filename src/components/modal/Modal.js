import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ text, onTrue, closeModal }) => {
  const handleKeydown = e => {
    if (e.code === 'Escape') {
      closeModal(false);
    }
  };

  const handleClickModal = e => {
    if (
      e.target.dataset.type === 'div' ||
      e.target.dataset.type === 'no' ||
      e.target.dataset.type === 'yes'
    ) {
      if (e.target.dataset.type === 'yes') {
        onTrue();
      }
      closeModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <div onClick={handleClickModal} data-type="div" className={styles.overlay}>
      <div className={styles.modalWindow}>
        <p className={styles.modalDescription}>{text}</p>
        <div className="borderBtn">
          <button className={styles.btnModal} type="button" data-type="yes">
            ДA
          </button>
          <button data-type="no" className={styles.btnModal}>
            НET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
