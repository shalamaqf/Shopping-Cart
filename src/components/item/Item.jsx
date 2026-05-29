export default function Item({cartItem}) {
    
    
    return (
        <>
        {
            cartItem.quantity === 0 ? 
            <div className="removal-container">
                <p className="removal-permission-text">Are you sure want to remove {cartItem.name} from the cart?</p>
                <div className="removal-button-container">
                    <button className="yes-button">Yes</button>
                    <button className="no-button">No</button>
                </div>
            </div>
            :
            <div className="item">
                <div className="item-detail">
                    <p>{cartItem.name}</p>
                    <p>Quantity:  {cartItem.quantity}</p>
                </div>
                <div className="item-cart-button-container">
                    <button className="increment-cart">+</button>
                    <button className="decrement-cart">-</button>
                </div>
            </div>
        }
        </>
    )
}