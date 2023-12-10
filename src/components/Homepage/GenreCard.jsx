import genre from"../AdminGenre_save/Genre_txt"
import React from 'react';
import './GenreCard.css';
import catePic from '../../components/assets/horrorCat.png';
const GenreCard=(props) =>{
  const { picc,genrename} = props.picc;

  return (
    <div className='genrecardd'>   
    <img className="imggenre"src={picc} alt="" />
    <h3 className="genreNameCard">{genrename}</h3>
    {/* <img src={catePic} alt="" /> */}
    </div>
);
}
export default GenreCard;