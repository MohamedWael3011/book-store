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
                    <a href="" className="Nav_link">Books</a>
                </div>
                <div className="Nav_items">
                    <a href="" className="Nav_link">Genre</a>
                </div>
                <div className="Nav_items">
                    <a href="" className="Nav_link">Orders</a>
                </div>
                <div className="Nav_items">
                    <a href="" className="Nav_link">Statistics</a>
                </div>
            </div>
            <div className="Nav_icons_container">
                <div className="Nav_icons">
                    <a href=""><img src={search} /></a>
                </div>
                <div className="Nav_icons">
                    <a href=""><img src={cart} /></a>
                </div>
                <div className="Nav_icons">
                    <a href=""><img src={user} /></a>
                </div>
            </div>
        </div>
    )
}
export default NavAdmin