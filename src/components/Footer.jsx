import React from "react";
import logo from "../images/logo1.png";
import instagram from "../images/Instagram.png";
import faceboook from "../images/Facebook.png";
import twitter from "../images/Twitter.png";
import youtube from "../images/Youtube.png";
const Footer = () => {
  return (
    <>
      <div className="footerGrid w-full  bg-[#399866] m-[5px] mt-[5rem] mb-[1rem] pb-[1rem] rounded-[30px] text-white">
        <div></div>
        <div className="flex items-center justify-center ">
          <img className="w-[30%]" src={logo} />
        </div>
        <div className="mt-[6rem] ml-[1rem]">
          <h1 className="font-bold text-[16px] p-2 manuale">Company</h1>
          <p className="font-normal cursor-pointer text-[14px] p-2">About</p>
          <p className="font-normal cursor-pointer text-[14px] p-2">Features</p>
          <p className="font-normal cursor-pointer text-[14px] p-2">Work</p>
          <p className="font-normal cursor-pointer text-[14px] p-2">Career</p>
        </div>
        <div className="mt-[6rem] ml-[1rem]">
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
        <div className="mt-[6rem] ml-[1rem]">
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
        <div className="flex items-center justify-center flex-col ">
          <div className="flex items-center justify-center">
            <div>
              <a>
                <img className="cursor-pointer" src={faceboook} />
              </a>
            </div>
            <div>
              <a>
                <img className="cursor-pointer" src={twitter} />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <a>
                <img className="cursor-pointer" src={instagram} />
              </a>
            </div>
            <div>
              <a>
                <img className="cursor-pointer" src={youtube} />
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Footer;
