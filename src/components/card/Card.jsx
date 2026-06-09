import PropTypes from "prop-types";
import { useState } from "react";
import styles from './Card.module.css'

export default function Card({item, addToCart}) {
    const [quantity, setQuantity] = useState(1);

    function handleQuantityInput(e) {
        const num = Math.floor(Number(e.target.value));

        if (isNaN(num)) {
            setQuantity(1);
            return;
        }

        if (num < 0 || num === 0) {
            setQuantity(1);
        } else {
            setQuantity(num);
        }
    }

    function handleQuantityIncrement() {
        setQuantity(prev => prev + 1);
    }

    function handleQuantityDecrement() {
        setQuantity(prev => {
            const newValue = prev - 1;
            return newValue < 1 ? 1 : newValue;
        })
    }

    return (
        <article className={styles.card}>
            <div className={styles['img-container']}>
                <img className={styles.img} src={item.src} alt={`An image of ${item.name}`} />
            </div>
            <div className={styles['item-detail-container']}>
                <h3 className="item-detail name">{item.name}</h3>
                <p className="item-detail price">${item.price}</p>
            </div>
            <div className={styles['quantity-section']}>
                <div className={styles['input-field-container']}>
                    <label className ="label-quantity" htmlFor="quantity">Quantity: {quantity}</label>
                    <input 
                        type="number" 
                        name="quantity" 
                        className ="input-quantity" 
                        value = {quantity}
                        onChange={handleQuantityInput}/>
                </div>
                <div className={styles['quantity-button-container']}>
                    <button className={styles['quantity-button']} onClick={handleQuantityIncrement}>+</button>
                    <button className={styles['quantity-button']} onClick={handleQuantityDecrement}>-</button>
                </div>
            </div>
            <div className={styles['addToCart-container']}>
                <button className={styles['addToCart-button']} onClick={() => addToCart(item, quantity)}>Add To Cart</button>
            </div>
        </article>
    )
}

Card.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
  }),

  addToCart: PropTypes.func.isRequired
}