import Signup from "./components/LoginSignup/Signup.jsx"
import Login from "./components/LoginSignup/Login.jsx"
import Navbar from "./components/NavAndFooter/Navbar.jsx"
import {Routes, Route} from 'react-router-dom'
import BookTest from "./components/Home/BookTest.jsx"

function App() {

  return (
    <><Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Signup/>}/>
    </Routes>
    <div>
        <BookTest />
      </div></>
  )
}

export default App
