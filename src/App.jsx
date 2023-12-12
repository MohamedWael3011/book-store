import Signup from "./components/LoginSignup/Signup.jsx"
import Login from "./components/LoginSignup/Login.jsx"
import Navbar from "./components/NavAndFooter/Navbar.jsx"
import {Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom'
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
import HomePage from "./components/Homepage/HomePage.jsx"
import BookNotFound from "./components/Home/BookNotFound.jsx"

function App() {

  return (
    
  <Routes>
    <Route path="/" element={<Navigate to="/register" />} index/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Signup/>}/>
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/book/:bookid" element={<BookPage/>}/>
    <Route path="/book" element={<BookNotFound/>}/>
    <Route path="/book-cat" element={<CategorizedBooks/>}/>
  </Routes>
  )
}
export default App
