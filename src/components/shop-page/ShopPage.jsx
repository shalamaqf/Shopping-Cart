import { useEffect, useState, useRef } from "react"
import { PRODUCT_API_URL } from '.../data/api.js';
import CardGrid from "../card-grid/CardGrid.jsx";

export default function ShopPage() {
    const [products, setProducts] = useState([]);

    let isMounted = useRef(true);

    async function fetchProductData() {
        try {
            const responses = await fetch(PRODUCT_API_URL);
            if (!responses.ok) throw new Error ('HTTP Error');
            const data  = await responses.json();
            return data;
        } catch {
            console.log('Fetch failed');
            return [];
        }
    }

    async function createProductObject() {
        const productData = await fetchProductData();
        
        const tempArray = productData.map(item => ({
            id: item.id,
            name: item.title,
            src: item.image,
            price: item.price
        }))

        return tempArray;
    }
    
    async function handleProductData() {
        const data = await createProductObject();

        if (isMounted.current) {
            setProducts(data);
        }
    }


    useEffect( () => {
        isMounted.current = true;
        handleProductData();

        return (() => isMounted.current = false);
    }, []);

    return (
        <main className="shop-page">
            <h2>Products</h2>
            <CardGrid products={products}/>
        </main>
    )
}