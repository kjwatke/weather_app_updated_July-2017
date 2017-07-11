import React from 'react';

const handleClose = () => {
  const modal = document.querySelector('.m-container');
  modal.classList.add('hide-m');
  setTimeout(() => {
    const modalContainer = document.querySelector('.m');
    modalContainer.classList.add('hide-m-container');
  }, 150);
};
const Modal = () =>
  (<div className="outer-container">
    <div className="m">
      <div className="m-container">
        <div className="m-links-container">
          <a href="" className="attribution">
            Link
          </a>
          <a href="" className="attribution">
            Link
          </a>
          <a href="" className="attribution">
            Link
          </a>
          <a href="" className="attribution">
            Link
          </a>
          <a href="" className="attribution">
            Link
          </a>
          <a href="" className="attribution">
            Link
          </a>
          <a href="" className="attribution">
            Link
          </a>
          <a href="" className="attribution">
            Link
          </a>
        </div>
        <img
          src="img/md_close.svg"
          alt="close button"
          className="close-btn"
          onClick={handleClose}
        />
      </div>
    </div>
  </div>);

export default Modal;
