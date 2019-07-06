import React from 'react';

const GifItem = ({ gif }) => {
  return (
    <li>
      <img className="gif-solo" src={gif.images.downsized.url} />
    </li>
  )
};

export default GifItem;
