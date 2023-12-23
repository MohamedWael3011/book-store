import React, { useEffect, useState } from "react";
import './cart.css';
import Navbar from "../NavAndFooter/Navbar";
import Footer from "../NavAndFooter/Footer";
import Basket from "../../components/assets/Trash.png";
import AddIcon from "../../components/assets/PlusCircle.png";
import DecrementIcon from "../../components/assets/MinusCircle.png";
import testbook from '../../components/assets/testbook.jpg';
import BackButton from '../BackButton/BackButton';
import Book1 from  '../../components/assets/Book1.png';
import Book2 from  '../../components/assets/Book2.png';
import Book3 from  '../../components/assets/Book3.png';
import Book from '../../components/Home/Book';
import { getBooks, getBook } from "../../controller/BooksController.ts"
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getCart } from "../../controller/UserController.ts";
import useUserDetails from "../../hooks/useUserDetails.js";

// import {useHistory} from "react-router-dom";
// import { Link } from "react-router-dom";


  const Cart = () => {
    const [user] = useUserDetails();
    const [totalAmount,setTotalAmount] = useState(0);
    const {data:cartData} = useQuery({
      queryFn:()=> getCart(8),
      queryKey: [`cart ${8}`]
    });

    


    console.log(cartData)
    
      
      
    

    useEffect(()=>{
      let sum = 0
      cartData?.forEach(cart=>{
        sum +=cart.book.price;
      }
      )
      setTotalAmount(sum)

    },[cartData])
  return (
    <div>
      <Navbar />

                 <div className="Button">
                    <BackButton/>
                  </div>
      <div className="cartDetails">
        <div className="left-section">
         <div className="top">

         <div className="orderID" data-order-id={`Order ${0}`}></div>
         </div>
          <div className="left-section-margin">
              <div>
              {cartData ? (
  <div className="allItems">
{cartData?.map((cart,index) => {

return (<div key={index} className="AllItemsSection">
<div className="items-section" key={cart.book.id}>
<div className="book-info">
  <div className="book_cover">
    <img className="book-cover" src={cart.book.image_url} alt="Book Cover" />
  </div>
  <div className="book-details">
    <div className="title">{cart.book.book_name}</div>
    <div className="price">Price: {cart.book.price} EGP</div>
    <div className="quantity">
      <button
        className="decrementButton"
      >
        <img src={DecrementIcon} alt="Decrement" className="icon" />
      </button>
      <span>{cart.quantity}</span>
      <button
        className="incrementButton"
      >
        <img src={AddIcon} alt="Increment" className="icon" />
      </button>
    </div>
  </div>
</div>
<button>
  <div className="TrashSection">
  <div className="verticalLine"></div>
  <img className="removeIcon" src={Basket} alt="Basket" />
</div>
  </button>
</div>

</div>)
}

)}
  </div>
) : (
  <div className="emptyCart">
    <div>Your cart is empty.</div>
    <div className="enterQuan">Increment the quantity</div> 
</div>
)}
              
</div> 






  </div>
  {/* <div className="orderAmount">Order Amount: {orderAmount} EGP</div>
  <div className="deliveryAmount">Delivery Amount: {deliveryAmount} EGP</div>
  <div className="totalAmount">Total Amount: {totalAmount} EGP</div> */}
</div>
  <div className="right-section">
         <h3 className="CartText">Cart Summary</h3>       
        <div className="horiz-line"></div>
        <h4 className="booksTotal"> Total items: {cartData?.length} Books<br/>
                                    Total Price: {totalAmount} EGP
        </h4>
        <div className="horiz-line"></div>
        <div><input className='inputText'
              type="text"
              placeholder="Add Promo Code"
            />
            </div>
            <div className="freeshipping">
            *Free Shipping For Orders Above 1000*
            </div>
            <div className="btn">
              <button type="submit" className="text-3xl"
            //    onClick={handleSubmit}
               >
                <h3 className="proceed">Proceed to checkout</h3>
              </button>
            </div>
          
   
  </div>
</div>

<div className="horiz-line2"></div>
    <div>
    <div className="bottom-section">
      <div className="text-Suggest">
      <div className="Suggest1">More Suggestions</div>
      <div className="Suggest2"><a href = "">See All &gt; </a></div>
      </div>
      <div className="bookSuggestions">
      {cartData?.map((cart)=>{return (<Book key={cart.book.id} book={cart.book} className='book_cont'/>)})}
        </div>
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default Cart;