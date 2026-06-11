import PropTypes from "prop-types"
import styles from './Item.module.css'

export default function Item({item, removeItem, incrementItemQuantity, decrementItemQuantity, resetQuantityToDefault}) {
    
    
    return (
        <>
        {
            item.quantity === 0 ? 
            <div className={styles['removal-container']}>
                <p className={styles['removal-text']}>Are you sure want to remove {item.name} from the cart?</p>
                <div className={styles['removal-button-container']}>
                    <button className={styles['removal-button']} onClick={() => removeItem(item)}>Yes</button>
                    <button className={styles['removal-button']} onClick={() => resetQuantityToDefault(item)}>No</button>
                </div>
            </div>
            :
            <div className={styles['item-container']}>
                <div className={styles['item-detail-container']}>
                    <p className="cart-item-detail name">{item.name}</p>
                    <p className="cart-item-detail quantity">Quantity:  {item.quantity}</p>
                    <p className="cart-item-detail price">Subtotal: <span className={styles.price}>${(item.price * item.quantity).toFixed(2)}</ span></p>
                </div>
                <div className={styles['item-button-container']}>
                    <button className={styles['button-quantity']} onClick={() => incrementItemQuantity(item)}>+</button>
                    <button className={styles['button-quantity']} onClick={() => decrementItemQuantity(item)}>-</button>
                </div>
            </div>
        }
        </>
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    removeItem: PropTypes.func.isRequired,
    incrementItemQuantity: PropTypes.func.isRequired,
    decrementItemQuantity: PropTypes.func.isRequired,
    resetQuantityToDefault: PropTypes.func.isRequired,
}