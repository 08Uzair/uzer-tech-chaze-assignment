import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

export function Card() {
  const data = [
    {
      title: "Morocco strikes with earthquake",
      content:
        "Current situation for Morocco has gone horrible due to the strike of Earthquake",
      price: "$ 4400",
      width: "8rem",
      img: img1,
      color: "#FF1414",
    },
    {
      title: "Harmful Disease in Air",
      content: "World has been infected with a deadly life-taking virus...",
      price: "$ 7888",
      width: "15rem",
      img: img2,
      color: "#FB983D",
    },
    {
      title: "Morocco strikes with earthquake",
      content:
        "Current situation for Morocco has gone horrible due to the strike of Earthquake",
      price: "$ 4400",
      width: "18rem",
      img: img3,
      color: "#0E9602",
    },
  ];

  return (
    <>
      <div className=" cards1 flex items-center justify-center flex-wrap ">
        {data.map((item, index) => (
          <div
            key={index}
            className="max-w-[24rem] bg-white rounded-lg overflow-hidden shadow-md mb-5 m-[2rem]"
          >
            <div className="m-0 rounded-none">
              <img className="w-full" src={item.img} />
            </div>
            <div className="p-4">
              <h4 className="manuale text-[18px] font-semibold">
                {item.title}
              </h4>
              <p className="mt-3 text-gray-600 font-normal text-[15px]">
                {item.content}
              </p>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center -space-x-3 text-[25px] font-bold">
                {item.price}
              </div>
              <p className="text-gray-600 text-[15px] font-normal">
                Donated till now
              </p>
            </div>
            <div className="radar w-full flex flex-col justify-center items-center mb-[1rem] ">
              <div className="bg-[#E0E0E0] w-[20rem] h-[15px] flex items-center justify-start rounded-full">
                <div
                  className={` h-[15px] rounded-full`}
                  style={{ width: item.width, backgroundColor: item.color }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
