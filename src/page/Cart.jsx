import React, { useContext } from "react";
import { CartContext } from "@/Context/CartContext";
const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg border-2">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center py-6">Your cart is empty.</p>
      ) : (
        <>
          <table className="min-w-full border text-gray-800">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Quantity</th>
                <th className="py-3 px-4">Subtotal</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="bg-gray-300">
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-3 px-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className=" w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="py-3 px-4 font-semibold">{item.name}</td>
                  <td className="py-3 px-4">${item.price}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-200 px-2 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-200 px-2 rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between mt-6">
            <button
              onClick={clearCart}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md text-blue-700 font-semibold"
            >
              Clear Cart
            </button>
            <h3 className="text-xl font-bold text-black">
              Total: <span className="text-blue-700">${total.toFixed(2)}</span>
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
