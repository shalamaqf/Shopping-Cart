import NavBar from '../components/navbar/Navbar'
import { Outlet } from 'react-router';
import { useState } from 'react';

export default function App() {
    const [cart, setCart] = useState([]);


    function addToCart(newItem, newQuantity) {
        const newObj = {
            id: newItem.id,
            name: newItem.name,
            quantity: newQuantity,
            price: newItem.price
        }

        setCart(prevCart => {
                const isExist = prevCart.find(item => item.id === newObj.id);

                if (isExist) {
                    return prevCart.map(item => 
                        item.id === newObj.id ? 
                        {...item, quantity: item.quantity + newObj.quantity} : 
                        item
                    )
                } else {
                    return [...prevCart, newObj];
                }
            }
        )
    }

    function removeItem(newItem) {
        setCart(prevCart => 
            prevCart.filter(item => item.id !== newItem.id)
        )
    }

    function incrementItemQuantity(newItem) {
        setCart(prevCart =>{
            const isExist = prevCart.find(item => item.id === newItem.id);

            if (isExist) {
                return prevCart.map(item => 
                    item.id === newItem.id ?
                    {...item, quantity: item.quantity + 1} :
                    item
                )
            } else {
                return prevCart;
            }
        })
    }

    function decrementItemQuantity(newItem) {
        setCart(prevCart => {
            const isExist = prevCart.find(item => item.id === newItem.id);

            if (isExist) {
                return prevCart.map(item =>
                    item.id === newItem.id ?
                    {...item, quantity: item.quantity - 1} : 
                    item
                )
            } else {
                return prevCart;
            }
        })
    }

    function resetQuantityToDefault(newItem) {
        setCart(prevCart => {
            const isExist = prevCart.find(item => item.id === newItem.id);

            if (isExist) {
                return prevCart.map(item =>
                    item.id === newItem.id ?
                    {...item, quantity: 1} :
                    item
                )
            } else {
                return prevCart;
            }
        })
    }

    return (
        <>
            <NavBar />
            <Outlet context={{
                cart,
                addToCart,
                removeItem,
                incrementItemQuantity,
                decrementItemQuantity,
                resetQuantityToDefault 
            }} />
        </>
    )
}