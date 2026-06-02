import { useOutletContext } from 'react-router';
import ItemGrid from '../item-grid/ItemGrid.jsx'

export default function CartPage() {
    const { removeItem,
            incrementItemQuantity,
            decrementItemQuantity,
            resetQuantityToDefault,
            cart } = useOutletContext();

    function calculateTotalPrice() {
        let total = 0;

        for (let i = 0; i < cartItems.length; i++) {
            const subtotal = cartItems[i].price * cartItems[i].quantity;
            total += subtotal;
        }
        
        return total;
    }

    return (
        <main className='cart-page'>
            <h2>Cart</h2>
            <ItemGrid />
            <div className='total-container'>
                <p className='total'>Total: {calculateTotalPrice()}</p>
            </div>
        </main>
    )
}