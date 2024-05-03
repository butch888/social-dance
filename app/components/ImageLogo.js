import React from 'react';

const ImageLogo = ({ src, alt }) => {
  return <img src={src} alt={alt} className="block cursor-pointer shadow-xl"/>;
};

export default ImageLogo;