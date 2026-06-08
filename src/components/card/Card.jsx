import PropTypes from "prop-types";
import { useState } from "react";

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
        <article className="card">
            <div className="img-item-container">
                <img src={item.src} alt={`An image of ${item.name}`} />
            </div>
            <div className="item-detail-container">
                <h3 className="item-detail name">{item.name}</h3>
                <p className="item-detail price">${item.price}</p>
            </div>
            <div className="quantity-section">
                <div className="input-field-container">
                    <label className ="label-quantity" htmlFor="quantity">Quantity: {quantity}</label>
                    <input 
                        type="number" 
                        name="quantity" 
                        className ="input-quantity" 
                        value = {quantity}
                        onChange={handleQuantityInput}/>
                </div>
                <div className="quantity-button-container">
                    <button className="increment button" onClick={handleQuantityIncrement}>+</button>
                    <button className="decrement button" onClick={handleQuantityDecrement}>-</button>
                </div>
            </div>
            <div className="add-to-cart-button-container">
                <button className="add-to-cart-button" onClick={() => addToCart(item, quantity)}>Add To Cart</button>
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