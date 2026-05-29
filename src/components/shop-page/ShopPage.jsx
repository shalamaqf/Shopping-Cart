import { useState } from "react"
import { PRODUCT_API_URL } from '.../data/api.js';

export default function ShopPage() {
    const [product, setProduct] = useState([]);

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


    return (
        
    )
}