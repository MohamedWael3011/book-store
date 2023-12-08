import './Genrelist.css';
import React from 'react';

const Genre = (props) => {
  const { genre } = props.genre;

  return (
    <div className='genrelist'>   
        <h4 className='genrename'>{genre}</h4>
    </div>
);
}

export default Genre;