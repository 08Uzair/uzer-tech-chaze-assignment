import React from "react";
import { data } from "../utils";
const Section2 = () => {
  return (
    <div
      style={{
        backgroundColor: "#399866",
      }}
      className="welfareTab rounded-[40px] "
    >
      <div className="h-full flex items-center justify-center flex-wrap">
        {data.map((item, index) => {
          return (
            <div className="txt5 m-[4.5rem]  text-center " key={index}>
              <img className=" w-[45%] ml-[3rem]" src={item.img} />
              <h1 className="txt3 text-[#FDC137] text-[70px]">{item.num}</h1>
              <p className="txt4 text-[20px] text-white">{item.txt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
