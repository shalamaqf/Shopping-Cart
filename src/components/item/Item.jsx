import PropTypes from "prop-types"

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
                    <p className="cart-item-detail name">{cartItem.name}</p>
                    <p className="cart-item-detail quantity">Quantity:  {cartItem.quantity}</p>
                    <p className="cart-item-detail subtotal">Subtotal: {cartItem.price * cartItem.quantity}</p>
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

Item.propTypes = {
    cartItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
}