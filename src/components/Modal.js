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
        <p style={{ marginBottom: '5%' }}>
          Some of the images used on this page have come from authors work on Create Commons.
        </p>
        <div className="m-links-container">
          <a href="https://creativecommons.org/licenses/by/2.0/legalcode" className="attribution">
            Creative Commons License
          </a>
          <div style={{ marginTop: '5%' }}>
            Icons made by
            <a href="http://www.freepik.com" title="Freepik" style={{ margin: '1%' }}>
              Freepik
            </a>
            from
            <a href="http://www.flaticon.com" title="Flaticon" style={{ margin: '1%' }}>
              www.flaticon.com
            </a>
            is licensed by
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '2%' }}
            >
              CC 3.0 BY
            </a>
          </div>
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
