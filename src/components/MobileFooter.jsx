import React from "react";
import logo from "../images/logo1.png";
import instagram from "../images/Instagram.png";
import faceboook from "../images/Facebook.png";
import twitter from "../images/Twitter.png";
import youtube from "../images/Youtube.png";
const MobileFooter = () => {
  return (
    <>
      <div className="footerGrid w-[90%]  bg-[#399866] m-auto mt-[5rem] mb-[1rem] pb-[1rem] rounded-[30px] text-white">
        <div></div>
        <div className="flex items-center justify-center ">
          <div>
            <img className="w-[70%] m-[1rem]" src={logo} />
            <div className="mt-[2rem] ml-[1rem]">
              <h1 className="font-bold text-[16px] p-2 manuale">Company</h1>
              <p className="font-normal cursor-pointer text-[14px] p-2">
                About
              </p>
              <p className="font-normal cursor-pointer text-[14px] p-2">
                Features
              </p>
              <p className="font-normal cursor-pointer text-[14px] p-2">Work</p>
              <p className="font-normal cursor-pointer text-[14px] p-2">
                Career
              </p>
            </div>
          </div>
          <div>
            <div className="mt-[2rem] ml-[1rem]">
              <h1 className="font-bold text-[16px] p-2 manuale">Help</h1>
              <p className="font-normal cursor-pointer text-[14px] p-2">
                Customer Support
              </p>
              <p className="font-normal cursor-pointer text-[14px] p-2">
                Delivery Details
              </p>
              <p className="font-normal cursor-pointer text-[14px] p-2">
                Terms & Conditions
              </p>
              <p className="font-normal cursor-pointer text-[14px] p-2">
                Privacy Policy
              </p>
            </div>
            <div className="mt-[2rem] ml-[1rem]">
              <h1 className="font-bold text-[16px] p-2 manuale">Resources</h1>
              <p className="font-normal cursor-pointer text-[14px] p-2">
                Free eBooks
              </p>
              <p className="font-normal cursor-pointer text-[14px] p-2">
                Development Tutorial
              </p>
              <p className="font-normal cursor-pointer text-[14px] p-2">
                How to - Blog
              </p>
              <p className="font-normal cursor-pointer text-[14px] p-2">
                Youtube Playlist
              </p>
            </div>
          </div>
        </div>
        <div></div>

        <div className="w-full flex items-center justify-center">
          <a>
            <img className="cursor-pointer" src={faceboook} />
          </a>
          <a>
            <img className="cursor-pointer" src={twitter} />
          </a>
          <a>
            <img className="cursor-pointer" src={instagram} />
          </a>
          <a>
            <img className="cursor-pointer" src={youtube} />
          </a>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default MobileFooter;
