import React from 'react';

const MainImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className=" max-w-[100%] h-auto"/>;
};

export default MainImage;