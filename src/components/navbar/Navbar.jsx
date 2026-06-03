import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navlink-container">
            <NavLink className='navlink home' to='/'>Home</NavLink>
            <NavLink className='navlink shop' to='/shop-page'>Shop</NavLink>
            <NavLink className='navlink cart' to='/cart-page'>Cart</NavLink>
        </nav>
    )
}