import { useState, useEffect } from 'react';
import axios from 'axios';

export const useProductWithId = (productId) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const load = async () => {
            const response = await axios.get(`/products/${productId}`);
            setProduct(response.data);
        }

        load();
    }, [productId]);

    return product;
}