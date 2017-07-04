import React from 'react';

const Logo = () => {
  const imgStyles = {
    width: '140px',
    position: 'relative',
    left: '1rem',
    top: '1rem',
  };
  return <img src="img/freeCodeCamp.png" alt="some alt" style={imgStyles} />;
};

export default Logo;
