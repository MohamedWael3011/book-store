import React from "react";
import './NavAndFooter.css';
import logo from "../../components/assets/logo.png"
import search from "../../components/assets/MagnifyingGlass.svg"
import cart from "../../components/assets/ShoppingCartSimple.svg"
import user from "../../components/assets/UserCircle.svg"


const NavAdmin = () => {
    return (
        <div className="Nav_container">
            <div className="Logo">
                <img src={logo} className="logo"/>
            </div>
            <div className="Nav_items_container">
                <div className="Nav_items">
                    <Link to='/admin-books' className='Nav_link'>Books</Link>
                </div>
                <div className="Nav_items">
                    <Link to='/book-cat' className='Nav_link'>Genre</Link>
                </div>
                <div className="Nav_items">
                    <Link to='/admin-orders' className='Nav_link'>Orders</Link>
                </div>
                <div className="Nav_items">
                    <Link to='/statistics' className='Nav_link'>Statistics</Link>
                </div>
            </div>
            <div className="Nav_icons_container">
                <div className="Nav_icons">
                    <a href=""><img src={search} /></a>
                </div>
                <div className="Nav_icons">
                    <Link to='/cart'><img src={cart} /></Link>
                </div>
                <div className="Nav_icons">
                    <a href=""><img src={user} /></a>
                </div>
            </div>
        </div>
    )
}
export default NavAdmin