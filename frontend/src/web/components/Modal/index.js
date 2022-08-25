import React from 'react';
import './style.scss';

const Modal = p => (
  <div className="modal-popup">
    <div className="modal-contents">
      <button
        type="button"
        className="backdrop"
        onClick={e => {
          e.preventDefault();
          p.onClose();
        }}
      />
      <div className="modal-bodys">
        <a
          href="#"
          className="close-modal"
          onClick={e => {
            e.preventDefault();
            p.onClose();
          }}
        >
          &#x2715;
        </a>
        <p>Gunakan Aplikasi Andalan Mama untuk pengalaman memsak yang lebih lengkap</p>
        <button
          type="button"
          className="btn-red"
          onClick={e => {
            e.preventDefault();
            p.onClose();
            window.location.href = 'https://play.google.com/store/apps/details?id=com.andalanmama';
          }}
        >
          Download Sekarang
        </button>
      </div>
    </div>
  </div>
);

export default Modal;
