import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onRequestClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onRequestClose} className={styles.modalCloseButton}>
          Close
        </button>
        <div className={styles.modalImage}>
          <img src={children} alt="Modal Content" className={styles.modalImg} />
        </div>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ImageModal;
