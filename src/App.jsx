import Signup from "./components/LoginSignup/Signup.jsx"
import Login from "./components/LoginSignup/Login.jsx"
import Navbar from "./components/NavAndFooter/Navbar.jsx"
import {Routes, Route} from 'react-router-dom'
import BookTest from "./components/Home/BookTest.jsx"
import AddGenre from "./components/AdminGenre_save/AddGenre.jsx"
import Navbaradmin from "./components/NavAndFooter/NavAdmin.jsx"
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
        <AddGenre/>
        {/* <Deliveryy/> */}
      </div></>
  )

}

export default App
