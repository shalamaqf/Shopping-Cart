import Item from '../item/Item.jsx'
import PropTypes from 'prop-types'
import styles from './ItemGrid.module.css'

export default function ItemGrid({removeItem, incrementItemQuantity, decrementItemQuantity, resetQuantityToDefault, cart}) {
    return (
        <div className={styles['item-grid']}>
            {
                cart.map(item => {
                    return <Item 
                    key={item.id} 
                    item={item}
                    removeItem={removeItem}
                    incrementItemQuantity={incrementItemQuantity}
                    decrementItemQuantity={decrementItemQuantity}
                    resetQuantityToDefault={resetQuantityToDefault}
                    />
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