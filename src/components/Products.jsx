import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./custom/Button";

export function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((item, index) => (
        <div
          key={index}
          style={{
            width: "370px",
            height: "420px",
            borderRadius: "20px",
          }}
          className="product-card mt-6 w-96 bg-white rounded-lg border-[6px] border-[#F8F6E4] hover:border-[#399866] transition duration-300 ease-in-out m-2 relative"
        >
          <div className="p-6 productImage">
            <img src={item.thumbnail} alt={item.title} className="thumbnail" />
            <div className="flex items-center justify-center">
              <button
                style={{
                  borderTopWidth: "0px",
                  borderRightWidth: "1.5px",
                  borderBottomWidth: "1.5px",
                  borderLeftWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "#16442C",
                }}
                className=" bg-[#F8F6E4] w-[162px] h-[60px] hover:bg-[#FDC138] hover:border-[#AF8523] text-black px-4 py-2 text-[16px] font-medium rounded-full"
              >
                Buy Now
              </button>
            </div>
            <div className="productsDetail">
              <h1 className="manuale text-2xl font-bold mb-2 line-clamp-[1.5]">
                {item.title}
              </h1>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {item.description}
              </p>
              <div className="flex items-center">
                <button
                  style={{
                    borderTopWidth: "0px",
                    borderRightWidth: "1.5px",
                    borderBottomWidth: "1.5px",
                    borderLeftWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "#16442C",
                  }}
                  className=" w-[162px] h-[60px] bg-[#FDC138] border-[#AF8523] text-black px-4 py-2 text-[16px] font-medium rounded-full"
                >
                  Reviews : {item.rating}
                </button>
              </div>
              <div className="manuale text-3xl font-bold text-gray-900 mt-4">
                Price : $ {item.price}
              </div>
              <NavLink to={`/products/${item.id}`}>
                <div className="flex items-center justify-center">
                  <Button label="Buy Now" />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
