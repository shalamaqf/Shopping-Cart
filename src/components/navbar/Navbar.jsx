import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css'

export default function Navbar({cart}) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className={styles.nav}>
            <NavLink className={({isActive}) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink} to='/'>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink} to='/shop-page'>Shop</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink} to='/cart-page'>Cart</NavLink>
            {totalItems === 0 ? null : <span data-testid="total-items">{totalItems}</span>}
        </nav>
    )
}