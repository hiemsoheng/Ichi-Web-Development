import PorductContext from "@/Context/ProductContext";
import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Products = () => {
  const { products } = useContext(PorductContext);

  return (
    <div className="max-w-7xl mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product, index) => (
          <li key={index} className=" bg-blue-200 rounded-lg"> 
            <img src={product.image} alt={product.name} className="w-full h-70"/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <ul className="flex gap-2">
              {product.size.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
            <FaCartShopping size={25} className="flex justify-items-end " />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
