import Signup from "./components/LoginSignup/Signup.jsx"
import Login from "./components/LoginSignup/Login.jsx"
import Navbar from "./components/NavAndFooter/Navbar.jsx"
import {Routes, Route} from 'react-router-dom'
import BookTest from "./components/Home/BookTest.jsx"
import AddGenre from "./components/AdminGenre_save/AddGenre.jsx"
import Navbaradmin from "./components/NavAndFooter/NavAdmin.jsx"
import RemoveGenre from "./components/AdminGenre_save/RemoveGenre.jsx"

import Footer from "./components/NavAndFooter/Footer.jsx"
import DeliveryForm from "./components/Delivery/DeliveryForm.jsx"
import CategorizedBooks from "./components/CategorizedBooks/CategorizedBooks.jsx"
import Genrelist from "./components/CategorizedBooks/Genre.jsx"
import EditBookPage from "./components/Home/EditBookPage.jsx"
import BookPage from "./components/Home/BookPage.jsx"

import Statistics from "./components/Statistics/Statistics.jsx"



import Deliveryy from "./components/Delivery/DeliveryForm.jsx"
import Orders from "./components/UserOrders/Orders.jsx"
import AdminOrders from "./components/AdminOrders/AdminOrders.jsx"
import StarRatingAndReview from "./components/PropsAndComps/StarRatingAndReview.jsx"
import Homepage from"./components/Homepage/HomePage.jsx"

import AdminBooks from "./components/Admin_books/Adminbooks.jsx"

import Cart from "./components/Cart/Cart.jsx"
import UsersOrders from "./components/AdminOrders/UsersOrders.jsx"


function App() {

  return (
    
    <><Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Signup/>}/>
    </Routes>
    <div>
{/* 
       <Statistics/>   */}
      {/* <AdminBooks/> */}

        {/* <Homepage/> */}

      <AddGenre/>

        {/* <UsersOrders/> */}
   

        {/* <Cart/> */}
    </div> </>

  )
}
export default App
