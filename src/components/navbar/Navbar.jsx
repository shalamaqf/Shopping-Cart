import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <NavLink className={({isActive}) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink} to='/'>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink} to='/shop-page'>Shop</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink} to='/cart-page'>Cart</NavLink>
        </nav>
    )
}