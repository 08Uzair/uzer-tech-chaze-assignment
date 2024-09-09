import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
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
      <div className="flex flex-col gap-6">
        {/* Product Image */}
        <div className="productAdd flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="proImg w-[30%] h-auto rounded-lg shadow-lg"
          />
           <div className="proButtton flex items-center space-x-4 m-6">
           <button
                    style={{
                      borderTopWidth: "0px",
                      borderRightWidth: "1.5px",
                      borderBottomWidth: "1.5px",
                      borderLeftWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "#16442C",
                    }}
                    className="m-4 mt-[2rem] mb-[1rem] bg-[#F8F6E4] w-[162px] h-[60px] hover:bg-[#FDC138] hover:border-[#AF8523] text-black px-4 py-2 text-[16px] font-medium rounded-full"
                  >
                    Add to Cart
                  </button>
                  <button
                    style={{
                      borderTopWidth: "0px",
                      borderRightWidth: "1.5px",
                      borderBottomWidth: "1.5px",
                      borderLeftWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "#16442C",
                    }}
                    className="m-4 mt-[2rem] mb-[1rem] bg-[#F8F6E4] w-[162px] h-[60px] hover:bg-[#FDC138] hover:border-[#AF8523] text-black px-4 py-2 text-[16px] font-medium rounded-full"
                  >
                    Buy Now
                  </button>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-xl font-semibold text-gray-800 mb-2">
            Price: ${product.price}{" "}
            <span className="text-red-600 text-lg">
              (-{product.discountPercentage}% off)
            </span>
          </p>

          <p className="text-lg mb-4">
            Rating:{" "}
            <span className="font-semibold text-yellow-500">{product.rating}</span>
          </p>

          <div className="mb-4">
            <p>
              <strong>Availability:</strong>{" "}
              <span className="text-green-600">{product.availabilityStatus}</span>
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
          </div>

         

          <div className="text-gray-600">
            <h3 className="font-semibold mb-2">Product Details:</h3>
            <p>SKU: {product.sku}</p>
            <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
            <p>Dimensions: {`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`} cm</p>
            <p>Weight: {product.weight} oz</p>
          </div>

          <div className="text-gray-600 mt-4">
            <h3 className="font-semibold mb-2">Shipping Information:</h3>
            <p>{product.shippingInformation}</p>
            <p>Return Policy: {product.returnPolicy}</p>
            <p>Warranty: {product.warrantyInformation}</p>
          </div>
        </div>
      </div>

      {/* Additional Images */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4">Additional Images:</h3>
        <div className="w-[20%] flex items-center justify-center">
          {product.images.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`Product image ${index + 1}`}
              className="w-full m-5 h-auto rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Reviews:</h3>
        {product.reviews.length ? (
          product.reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 mb-4">
              <h4 className="font-semibold">{review.user}</h4>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-yellow-500">Rating: {review.rating}/5</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};
