import './OrderItem.css';
import React from 'react';

const OrderItem = (props) => {
  const {book_name, quantity, price} = props.items;

return(
    <div className='orderitem'>
        
             <h2 className="book_name">{book_name}</h2>
        <div className='qandp'>
                
            <div className='ayhaga'> <span>quantity: <span className="quantity"> {quantity} </span> </span> </div>  <br />
            <span> price: <span className="price"> {price} </span></span>

        </div>
            

    </div>
);
}
export default OrderItem;
