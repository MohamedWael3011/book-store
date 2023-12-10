import './ReviewsProp.css'
import React from 'react';

import star from '../../components/assets/star.svg'

const ReviewsProp = (props) => {
    const { username, content, rating} = props.review;
  
    return (
        <div className='review_main_cont'>
            <span className='username_cont'>{username}</span>
            <div className='likes_content_cont'>
                <p className='review_content'>{content}</p>
                <div className='rating_cont'>
                    <div className='star_cont'>
                        <img src={star}/>
                    </div>
                    <span className='rating_num'>{rating}</span>
                </div>
            </div>
        </div>
    );
  }
  
  export default ReviewsProp;