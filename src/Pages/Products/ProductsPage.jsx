import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5005/show-product", {
        withCredentials: true,
      });
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container px-4 pt-32 bg-cover bg-center w-full mx-auto bg-white ">
        <h3 className="mb-4">
          <span className="inline-flex items-center text-xl text-gray-500 gap-2">
            Home <IoIosArrowForward className="text-lg" /> All Products
          </span>
        </h3>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <AiOutlineLoading3Quarters className="text-5xl text-blue-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center flex-wrap">
            {products.length > 0 ? (
              products.map((item) => <ProductCard item={item} key={item._id} />)
            ) : (
              <p className="col-span-full text-center text-lg text-gray-700 py-8">
                কোনো প্রোডাক্ট নেই
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductsPage;
