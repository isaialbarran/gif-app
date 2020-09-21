import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  console.log(loading);

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        'Cargando....'
      ) : (
        <div className='card-grid'>
          {images.map((img) => (
            <GifGridItem key={img.id} img={img} />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;