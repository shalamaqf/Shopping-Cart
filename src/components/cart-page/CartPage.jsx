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

        for (let i = 0; i < cart.length; i++) {
            const subtotal = cart[i].price * cart[i].quantity;
            total += subtotal;
        }
        
        return total;
    }

    return (
        <main className='cart-page'>
            <h2>Cart</h2>
            <ItemGrid 
            removeItem={removeItem}
            incrementItemQuantity={incrementItemQuantity}
            decrementItemQuantity={decrementItemQuantity}
            resetQuantityToDefault={resetQuantityToDefault}/>
            <div className='total-container'>
                <p className='total'>Total: {calculateTotalPrice()}</p>
            </div>
        </main>
    )
}