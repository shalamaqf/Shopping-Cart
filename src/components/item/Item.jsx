import PropTypes from "prop-types"

export default function Item({item, removeItem, incrementItemQuantity, decrementItemQuantity, resetQuantityToDefault, cart}) {
    
    
    return (
        <>
        {
            item.quantity === 0 ? 
            <div className="removal-container">
                <p className="removal-permission-text">Are you sure want to remove {item.name} from the cart?</p>
                <div className="removal-button-container">
                    <button className="yes-button" onClick={() => removeItem(item)}>Yes</button>
                    <button className="no-button" onClick={() => resetQuantityToDefault(item)}>No</button>
                </div>
            </div>
            :
            <div className="item">
                <div className="item-detail">
                    <p className="cart-item-detail name">{item.name}</p>
                    <p className="cart-item-detail quantity">Quantity:  {item.quantity}</p>
                    <p className="cart-item-detail subtotal">Subtotal: {item.price * item.quantity}</p>
                </div>
                <div className="item-cart-button-container">
                    <button className="increment-cart" onClick={() => incrementItemQuantity(item)}>+</button>
                    <button className="decrement-cart" onClick={() => decrementItemQuantity(item)}>-</button>
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