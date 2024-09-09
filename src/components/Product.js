import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();
  console.log(id)
  console.log("id")
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        console.log(response); // Check data structure
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${product.price}
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
              Buy Now
            </button>
          </div>
          <div className="text-gray-600">
            <h3 className="font-semibold mb-2">Product Details:</h3>
            <p>Category: {product.category || "N/A"}</p>
            <p>Brand: {product.brand || "N/A"}</p>
            <p>Stock: {product.stock !== undefined ? product.stock : "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
