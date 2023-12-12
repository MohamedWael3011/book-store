import './Book.css';
import React from 'react';
import {Link} from 'react-router-dom'


const Book = (props) => {
  const { book_cover, title, author, price, book_id, genre, description, stock, sales, author_id } = props.book;

  return (
    <div className='book_cont'>
      <Link to={`/book/${book_id}`}>
        <div className='book_cover' >
            <img src={book_cover} className='book_cover_img'/>
        </div>
      </Link>
        <h3 className="book_title">{title}</h3>
        <div className="author_price_container">
          <span className="author">{author}</span>
          <div className='price_currency_cont'>
              <span className="book_price_book">{price}</span>
              <span className='currency_book'>EGP</span>
          </div>
        </div>
    </div>
  );
}

export default Book;