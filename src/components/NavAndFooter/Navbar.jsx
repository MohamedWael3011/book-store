import './NavAndFooter.css';
import logo from "../../components/assets/logo.png"
import search from "../../components/assets/MagnifyingGlass.svg"
import cart from "../../components/assets/ShoppingCartSimple.svg"
import user from "../../components/assets/UserCircle.svg"

const Navbar = () => {
    return (
        <div className="Nav_container md:text-md text-xs">
            <div className="Logo">
                <img src={logo} className="logo"/>
            </div>
            <div className="Nav_items_container">
                <div className="Nav_items whitespace-nowrap">
                    <a href="" className="Nav_link">Home</a>
                </div>
                <div className="Nav_items whitespace-nowrap">
                    <a href="" className="Nav_link">Genre</a>
                </div>
                <div className="Nav_items">
                    <a href="" className="Nav_link whitespace-nowrap">My Orders</a>
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
export default Navbar