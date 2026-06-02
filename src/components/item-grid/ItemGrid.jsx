import Item from '../item/Item.jsx'
import PropTypes from 'prop-types'

export default function ItemGrid({removeItem, incrementItemQuantity, decrementItemQuantity, resetQuantityToDefault, cart}) {
    return (
        <div className="cart-item-grid">
            {
                cart.map(item => {
                    return <Item key={item.id} item={item}/>
                })
            }
        </div>
    )
}

ItemGrid.propTypes = {
    removeItem: PropTypes.func.isRequired,
    incrementItemQuantity: PropTypes.func.isRequired,
    decrementItemQuantity: PropTypes.func.isRequired,
    resetQuantityToDefault: PropTypes.func.isRequired,
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}