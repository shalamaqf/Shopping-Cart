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
}