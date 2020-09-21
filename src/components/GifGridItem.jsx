import React from 'react';

const GifGridItem = ({ img }) => {
  const { url, title } = img;

  return (
    <div className='card animate__animated animate__fadeInLeftBig'>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifGridItem;
