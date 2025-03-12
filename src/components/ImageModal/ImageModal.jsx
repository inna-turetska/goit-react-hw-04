import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

export const ImageModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      isOpen={isOpen}
      ariaHideApp={false}
    >
      <button className={styles.modalCloseButton} onClick={() => onClose()}>
        Close
      </button>
      <div className={styles.modalImage}>
        {children && (
          <img src={children} alt="Modal Content" className={styles.modalImg} />
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
