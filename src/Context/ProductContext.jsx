
import fetchAPI from '@/utils/fatchAPI';
import { createContext, useEffect, useState } from 'react';

const PorductContext = createContext();




export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(
        () => JSON.parse(localStorage.getItem("products")) || []
    );

    useEffect(() => {
        const result = async () => {
            const data = await fetchAPI();
            setProducts(data);
            localStorage.setItem("products", JSON.stringify(data));
        }
        result();
    }, []);



    return (
        <PorductContext.Provider value={{ products, setProducts }}>
            {children}
        </PorductContext.Provider>
    )
};

export default PorductContext;