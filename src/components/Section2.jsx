import React from "react";
import home from "../images/home.png";
import heart from "../images/heart.png";
import donate from "../images/Donate.png";
import welfare from "../images/Welfare.png";
const Section1 = () => {
  return (
    <div
      style={{
        backgroundColor: "#399866",
      }}
      className="welfareTab rounded-[40px] "
    >
      <div className="h-full flex items-center justify-center flex-wrap">
        <div className="ptxt5 -[4.5rem]  text-center ">
          <img className=" w-[45%] ml-[3rem]" src={home} />
          <h1 className="txt3 text-[#FDC137] text-[70px]">563</h1>
          <p className="txt4 text-[20px] text-white">Project Completed</p>
        </div>
        <div className="txt5 p-[4.5rem]  text-center ">
          <img className="w-[45%] ml-[3rem]" src={heart} />
          <h1 className="txt3 text-[#FDC137] text-[70px]">425</h1>
          <p className="txt4 text-[20px] text-white">Trusted Partne</p>
        </div>
        <div className="txt5 p-[4.5rem]  text-center ">
          <img className="w-[45%] ml-[3rem]" src={donate} />
          <h1 className="txt3 text-[#FDC137] text-[70px]">978</h1>
          <p className="txt4 text-[20px] text-white">Money Donated</p>
        </div>
        <div className="txt5 p-[4.5rem]  text-center ">
          <img className="w-[45%] ml-[3rem]" src={welfare} />
          <h1 className="txt3 text-[#FDC137] text-[70px]">32</h1>
          <p className="txt4 text-[20px] text-white">Active Volenteer</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
