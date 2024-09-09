import React from "react";
import img1 from "../images/Donate1.png";
import img2 from "../images/Clothes.png";
import img3 from "../images/Fried Chicken.png";
import Button from "./custom/Button";

export function Donate() {
  const data = [
    {
      title: "Donate Money",
      content:
        "Your small help can change someone else life and can make someone happyand u will have a good deed added in your cart",
      img: img1,
    },
    {
      title: "Donate Clothes",
      content:
        "Your small help can change someone else life and can make someone happyand u will have a good deed added in your cart",
      img: img2,
    },
    {
      title: "Donate Food",
      content:
        "Your small help can change someone else life and can make someone happyand u will have a good deed added in your cart",
      img: img3,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            width: "370px",
            height: "420px",
            borderRadius: "20px",
          }}
          className="mt-6 w-96 bg-white rounded-lg border-[6px] border-[#F8F6E4] hover:border-[#399866] transition duration-300 ease-in-out"
        >
          <div className="p-6 flex items-center justify-center flex-col text-center donateCard">
            <img className="ml-1rem mb-12" src={item.img} alt={item.title} />
            <h5 className="text-[18px] manuale font-semibold text-blue-gray-900 mb-2">
              {item.title}
            </h5>
            <p className="text-gray-700 font-normal text-[15px]">
              {item.content}
            </p>
          </div>
          <div className="flex items-center justify-center">
           <Button label="Donate"/>
          </div>
        </div>
      ))}
    </div>
  );
}
