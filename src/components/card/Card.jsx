import { useState } from "react";

export default function Card({item}) {
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


    return (
        <article className="card">
            <div className="img-item-container">
                <img src="" alt="An image of a product item" />
            </div>
            <h3>{item.name}</h3>
            <div className="quantity-section">
                <div className="input-field-container">
                    <label className ="label-quantity" htmlFor="quantity">{quantity}</label>
                    <input type="number" name="quantity" className ="input-quantity"/>
                </div>
                <div className="quantity-button-container">
                    <button className="increment button">+</button>
                    <button className="decrement button">-</button>
                </div>
            </div>
            <div className="add-to-cart-button-container">
                <button className="add-to-cart-button">Add To Cart</button>
            </div>
        </article>
    )
}