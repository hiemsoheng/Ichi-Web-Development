
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Products = () => {
  const webdata = [
    {
      id: 1,
      name: "Coffee Web",
      description: "Welcome to our coffee website!",
      price: 29.99,
      image:
        "https://templatetoaster.com/wp-content/uploads/2019/05/Mocha-Coffee-Shop-PrestaShop-Theme.jpg",
      size: ["S", "M", "L"],
    },
    {
      id: 2,
      name: "Food Web",
      description: "Welcome to our delicious food website!",
      price: 39.99,
      image:
        "https://i.pinimg.com/736x/20/c6/6a/20c66a7cbbc7839fcc79ea1c13674478.jpg",
      size: ["M", "L", "XL"],
    },
    {
      id: 3,
      name: "School Web",
      description: "Welcome to our educational school website!",
      price: 49.99,
      image:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/kingster-school-website-template.jpg",
      size: ["S", "L"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto ">
      <h1 className="font-bold text-2xl pt-4">Web Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {webdata.map((product, index) => (
          <li
            key={index}
            className=" bg-blue-200 rounded-md shadow-md flex flex-col gap-2"
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
                <li key={idx} className="flex justify-center items-center w-5 h-5 rounded-full bg-amber-400">
                  {s}
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-auto pb-4">
              <li className="flex justify-evenly items-center hover:bg-blue-800 bg-black w-50 h-auto text-white place-items-center rounded-md cursor-pointer">
                <FaCartShopping size={25} className="" />
                Add to Cart
              </li>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
