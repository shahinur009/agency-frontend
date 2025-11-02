import React from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  // A helper to render a dynamic number of rating stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FcRating
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-200  bg-white m-2 md:w-72 w-full">
      <Link to={`details/${item._id}`} className="block">
        {/* Product Image */}
        <div className="h-full flex items-center justify-center p-1 bg-gray-50 overflow-hidden">
          <img
            src={item?.image}
            alt="Product"
            className="max-h-full md:h-56 max-w-full md:w-full transition-transform duration-300 group-hover:scale-110 rounded-md"
          />
        </div>

        <div className="p-4 space-y-3">
          {/* Product Name */}
          <h1 className="font-bold text-xl text-gray-800 truncate group-hover:text-blue-600 transition-colors duration-300">
            {item?.name}
          </h1>

          {/* Price & Rating */}
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <div className="flex items-center">
              <span className="text-red-600 font-bold text-lg whitespace-nowrap">
                ৳{item?.price} টাকা মাত্র
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="text-gray-600 font-medium whitespace-nowrap">
                রেটিং:
              </span>
              {renderStars(item?.rating)}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <button className="w-full sm:w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
              অর্ডার করুন
            </button>
            <button className="w-full sm:w-1/2 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors duration-300">
              বিস্তারিত দেখুন
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
