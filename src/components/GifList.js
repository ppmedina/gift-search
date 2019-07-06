import React from 'react';
import GifItem from './GifItem';

const GifList = ({ gifs }) => {
  const gifItems = gifs.map(gif => <GifItem key={gif.id} gif={gif} />);

  return (
    <ul className="cont-gifs">{gifItems}</ul>
  );
};

export default GifList;
