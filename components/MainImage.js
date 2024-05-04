import React from 'react';

const MainImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className=" max-w-full h-auto object-cover bg-customBlue"/>;
};

export default MainImage;