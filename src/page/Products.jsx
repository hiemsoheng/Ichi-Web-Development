import fetchAPI from "@/utils/fatchAPI";
import React, { useContext, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "@/Context/CartContext";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [webdata, setWebdata] = useState([]);
  const [systemdata, setSystemdata] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { webdata, systemdata } = await fetchAPI();
      setWebdata(webdata);
      setSystemdata(systemdata);
    };
    getData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 pt-15">
      {/* Web Products */}
      <section id="web-products">
        <h1 className="font-bold text-2xl pt-4">Web Products</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {webdata.map((product) => (
            <li
              key={product.id}
              className="bg-blue-200 rounded-md shadow-md flex flex-col gap-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-70 rounded-md object-cover shadow-lg"
              />
              <h3 className="font-bold pl-4">{product.name}</h3>
              <p className="pl-4">{product.description}</p>
              <p className="pl-4">${product.price}</p>
              <ul className="flex gap-2 pl-4">
                {product.size.map((s, idx) => (
                  <li
                    key={idx}
                    className="flex justify-center items-center w-5 h-5 rounded-full bg-amber-400"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-auto pb-4">
                <button
                  onClick={() => addToCart(product)}
                  className="flex justify-evenly items-center hover:bg-blue-800 bg-black text-white py-2 px-4 rounded-md cursor-pointer"
                >
                  <FaCartShopping size={20} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/* System Products */}
      <section id="system-products">
        <h1 className="font-bold text-2xl pt-4 pb-2">System Products</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemdata.map((product) => (
            <li
              key={product.id}
              className="bg-blue-200 rounded-md shadow-md flex flex-col gap-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-70 rounded-md object-cover shadow-lg"
              />
              <h3 className="font-bold pl-4">{product.name}</h3>
              <p className="pl-4">{product.description}</p>
              <p className="pl-4">${product.price}</p>
              <ul className="flex gap-2 pl-4">
                {product.size.map((s, idx) => (
                  <li
                    key={idx}
                    className="flex justify-center items-center w-5 h-5 rounded-full bg-amber-400"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-auto pb-4">
                <button
                  onClick={() => addToCart(product)}
                  className="flex justify-evenly items-center hover:bg-blue-800 bg-black text-white py-2 px-4 rounded-md cursor-pointer"
                >
                  <FaCartShopping size={20} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default Products;
