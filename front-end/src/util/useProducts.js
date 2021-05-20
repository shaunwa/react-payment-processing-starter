import { useState, useEffect } from 'react';
import axios from 'axios';

export const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const load = async () => {
            const response = await axios.get('/products');
            setProducts(response.data);
        }

        load();
    }, []);

    return products;
}