import './Book.css';
import React from 'react';

const Book = (props) => {
  const { book_cover, title, author, price } = props.book;

  return (
    <div className='book_cont'>
        <div className='book_cover' >
            <img src={book_cover} className='book_cover_img'/>
        </div>
      <h3 className="book_title">{title}</h3>
      <div className="author_price_container">
        <span className="author">{author}</span>
        <div>
            <span className="price">{price}</span>
            <span className='currency'>EGP</span>
        </div>
      </div>
    </div>
  );
}

export default Book;