import React, { useState } from "react";
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

const Cart = () => {
  const [items, setItems] = useState([]);
  const [orderAmount, setOrderAmount] = useState(0);
  const deliveryAmount = 50;
//   const totalBooks = 0;
  const id = useState(0);
//   const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const totalAmount = orderAmount + deliveryAmount;
  const [totalBooks, setTotalBooks] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setTotalPrice(price * (quantity + 1));
  };
  
// const handleIncrement = (item) => {
//     const updatedItems = items.map((i) => {
//       if (i.id === item.id) {
//         return { ...i, quantity: i.quantity + 1 };
//       }
//       return i;
//     });
//     setItems(updatedItems);
//   };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotalPrice(price * (quantity - 1));
    }
  };
    

// const handleDecrement = (item) => {
//     const updatedItems = items.map((i) => {
//       if (i.id === item.id && i.quantity > 0) {
//         return { ...i, quantity: i.quantity - 1 };
//       }
//       return i;
//     });
//     setItems(updatedItems);
//   };
  
  const book = {
    book_cover: testbook,
    author: 'Author',
    title: 'Moghamrat Anso',
    price: '250'
  };

  
const data = {
    productData : [
        {
            id: 1,
            img: Book1,
            title: 'Twisted Hate',
            desc: '',
            price: 250
        },
        {
            id: 2,
            img: Book2,
            title: 'King of Wrath',
            desc: '',
            price: 750
        },
        {
            id: 3,
            img: Book3,
            title: 'It Ends With Us',
            desc: '',
            price: 450
        }
    ]
};

const handleAddToCart = (item) => {
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      const updatedItems = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + 1 };
        }
        return i;
      });
      setItems(updatedItems);
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
    setOrderAmount((prevAmount) => prevAmount + item.price);
    setTotalBooks((prevTotal) => prevTotal + 1);
  };
  
  const handleRemoveFromCart = (item) => {
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem.quantity > 1) {
      const updatedItems = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity - 1 };
        }
        return i;
      });
      setItems(updatedItems);
    } else {
      const updatedItems = items.filter((i) => i.id !== item.id);
      setItems(updatedItems);
    }
    setOrderAmount((prevAmount) => prevAmount - item.price);
    setTotalBooks((prevTotal) => prevTotal - 1);
  };
//   const location = useLocation();
//   const { book } = location.state || {};

//   useEffect(() => {
//     if (book) {
//       handleAddToCart(book);
//     }
//   }, [book]);



 
  return (
    <div>
      <Navbar />

      <div className="cartDetails">
        <div className="left-section">
         <div className="top">

          <div className="orderID" data-order-id="Order no." >        </div>
          {/* <BackButton></BackButton> */}
         </div>
          <div className="left-section-margin">
              <div>
              {items.length > 0 ? (
  <div className="allItems">

  </div>
) : (
  <div className="emptyCart">
    Your cart is empty.
  </div>
)}
              
                </div> 
                {/* <div className="items-section">
  <div className="quantity">
    <button className="decrementButton" onClick={handleDecrement}>
      <img src={DecrementIcon} alt="Decrement" className="icon" />
    </button>
    <span className="quantity">{quantity}</span>
    <button className="incrementButton" onClick={handleIncrement}>
      <img src={AddIcon} alt="Increment" className="icon" />
    </button>
  </div>
  <div className="book-info">
    <img className="book-cover" src={book.book_cover} alt="Book Cover" />
    <div className="book-details">
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <div className="price">{book.price}</div>
    </div>
  </div>
  <div className="TrashSection">
    <div className="verticalLine"></div>
    <img className="removeIcon" src={Basket} />
  </div>
</div> */}

{data.productData.map((book) => {
  const item = items.find((i) => i.id === book.id);
  const quantity = item ? item.quantity : 0;

  return (
    <div className="items-section" key={book.id}>
      <div className="book-info">
        <div className="book_cover">
          <img className="book-cover" src={book.img} alt="Book Cover" />
        </div>
        <div className="book-details">
          <div className="title">{book.title}</div>
          {/* <div className="author">{book.author}</div> */}
          <div className="price">Price: {book.price} EGP</div>
          <div className="quantity">
            <button
              className="decrementButton"
              onClick={() => handleRemoveFromCart(book)}
            >
              <img src={DecrementIcon} alt="Decrement" className="icon" />
            </button>
            <span>{quantity}</span>
            <button
              className="incrementButton"
              onClick={() => handleAddToCart(book)}
            >
              <img src={AddIcon} alt="Increment" className="icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="TrashSection">
        <div className="verticalLine"></div>
        <img className="removeIcon" src={Basket} alt="Basket" />
      </div>
    </div>
  );
})}



{/* {items.map((item) => (
  <div className="items-section" key={item.id}>
    <div className="TrashSection">
      <div className="verticalLine"></div>
      <button
        className="removeButton"
        onClick={() => handleRemoveFromCart(item)}
      >
        <img className="removeIcon" src={Basket} alt="Remove" />
      </button>
    </div>
    <div className="bookName">{item.name}</div>
    <div className="quantitySection">
      <button
        className="quantityButton"
        onClick={() => handleDecrement(item)}
      >
        <img
          className="quantityIcon"
          src={DecrementIcon}
          alt="Decrease"
        />
      </button>
      <div className="quantity">{item.quantity}</div>
      <button
        className="quantityButton"
        onClick={() => handleAddToCart(item)}
      >
        <img className="quantityIcon" src={AddIcon} alt="Add" />
      </button>
    </div>
  </div>
))} */}




          </div>
          {/* <div className="orderAmount">Order Amount: {orderAmount} EGP</div>
          <div className="deliveryAmount">Delivery Amount: {deliveryAmount} EGP</div>
          <div className="totalAmount">Total Amount: {totalAmount} EGP</div> */}
        </div>
          <div className="right-section">
                 <h3 className="CartText">Cart Summary</h3>       
                <div className="horiz-line"></div>
                <h4 className="booksTotal"> Total items: {totalBooks} Books<br/>
                                            Subtotal: {orderAmount} EGP
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
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="bookSuggestion" key={index}>
                <img className="bookCover" src={book.book_cover} alt="Book Cover" />
                <div className="bookTitle">{book.title}</div>
                <div className="last-row">

                <div className="bookAuthor">{book.author}</div>
                <div className="bookPrice">{book.price} EGP</div>

                </div>              
              </div>
            ))}
          </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;