import Signup from "./components/LoginSignup/Signup.jsx"
import Login from "./components/LoginSignup/Login.jsx"
import Navbar from "./components/NavAndFooter/Navbar.jsx"
import {Routes, Route} from 'react-router-dom'
import BookTest from "./components/Home/BookTest.jsx"
import AddGenre from "./components/AdminGenre_save/AddGenre.jsx"
import Navbaradmin from "./components/NavAndFooter/NavAdmin.jsx"
import Footer from "./components/NavAndFooter/Footer.jsx"
import DeliveryForm from "./components/Delivery/DeliveryForm.jsx"
import CategorizedBooks from "./components/CategorizedBooks/CategorizedBooks.jsx"
import Genrelist from "./components/CategorizedBooks/Genre.jsx"
import EditBookPage from "./components/Home/EditBookPage.jsx"
import BookPage from "./components/Home/BookPage.jsx"

import Deliveryy from "./components/Delivery/DeliveryForm.jsx"



function App() {

  return (
    
    <><Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Signup/>}/>
    </Routes>
    <div>
        {/* <AddGenre/> */}
        {/* <AddGenre/> */}
        {/* <Deliveryy/> */}

         <CategorizedBooks/>

      </div></>
  )

}

export default App
