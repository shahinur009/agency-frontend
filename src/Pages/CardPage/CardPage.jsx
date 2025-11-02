import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CartPage({ cartItems, removeFromCart, updateCartQuantity }) {
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/checkout", { state: { cartItems } });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Your Cart is Empty!",
        text: "Please add items to your cart before checking out.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="container mx-auto p-4 md:mt-28 mt-24">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Your Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="mb-4">Your cart is empty.</p>
          <Link to="/" className="text-[#B0627A] hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center p-4 border rounded-lg shadow-md bg-white"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: {item.price} BDT</p>
                  <div className="flex items-center mt-2">
                    <label htmlFor={`quantity-${item._id}`} className="mr-2">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      id={`quantity-${item._id}`}
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateCartQuantity(item._id, parseInt(e.target.value))
                      }
                      className="w-16 px-2 py-1 border rounded-md"
                    />
                  </div>
                  <p className="text-lg font-bold mt-2">
                    Subtotal: {(item.price * item.quantity).toFixed(2)} BDT
                  </p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700 mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 border rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
            <p className="text-xl font-semibold mb-4">
              Total: {calculateTotalPrice().toFixed(2)} BDT
            </p>
            <button
              onClick={handleCheckout}
              className="bg-[#B0627A] text-white px-8 py-3 rounded-md hover:bg-[#c95175] transition-colors duration-300 font-semibold w-full md:w-auto"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
