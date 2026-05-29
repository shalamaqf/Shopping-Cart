import { useEffect, useState } from "react"
import { PRODUCT_API_URL } from '.../data/api.js';

export default function ShopPage() {
    const [product, setProduct] = useState([]);

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
            src: item.image
        }))

        return tempArray;
    }
    
    async function handleProductData() {
        const data = await createProductObject();

        if (isMounted.current) {
            setProduct(data);
        }
    }

    return (
        
    )
}