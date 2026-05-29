import Item from '../item/Item.jsx'

export default function ItemGrid() {
    return (
        <div className="cart-item-grid">
            {
                cartItems.map(cartItem => {
                    return <Item key={cartItem.id} cartItem={cartItem}/>
                })
            }
        </div>
    )
}