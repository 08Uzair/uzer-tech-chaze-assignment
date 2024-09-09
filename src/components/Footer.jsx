import React from "react";
import logo from "../images/logo1.png";
import instagram from "../images/Instagram.png";
import faceboook from "../images/Facebook.png";
import twitter from "../images/Twitter.png";
import youtube from "../images/Youtube.png";

const Footer = () => {
  return (
    <>
      <div className="footerGrid w-full bg-[#399866] mt-[5rem] rounded-[30px] text-white py-10 px-5">
        {/* Responsive grid with tailwind */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Logo section */}
          <div className="flex items-center justify-center lg:col-span-1">
            <img className="w-[50%] lg:w-[30%]" src={logo} alt="logo" />
          </div>

          {/* Company Section */}
          <div className="lg:mt-[6rem]">
            <h1 className="font-bold text-[16px] p-2 manuale">Company</h1>
            <p className="font-normal cursor-pointer text-[14px] p-2">About</p>
            <p className="font-normal cursor-pointer text-[14px] p-2">Features</p>
            <p className="font-normal cursor-pointer text-[14px] p-2">Work</p>
            <p className="font-normal cursor-pointer text-[14px] p-2">Career</p>
          </div>

          {/* Help Section */}
          <div className="lg:mt-[6rem]">
            <h1 className="font-bold text-[16px] p-2 manuale">Help</h1>
            <p className="font-normal cursor-pointer text-[14px] p-2">Customer Support</p>
            <p className="font-normal cursor-pointer text-[14px] p-2">Delivery Details</p>
            <p className="font-normal cursor-pointer text-[14px] p-2">Terms & Conditions</p>
            <p className="font-normal cursor-pointer text-[14px] p-2">Privacy Policy</p>
          </div>

          {/* Resources Section */}
          <div className="lg:mt-[6rem]">
            <h1 className="font-bold text-[16px] p-2 manuale">Resources</h1>
            <p className="font-normal cursor-pointer text-[14px] p-2">Free eBooks</p>
            <p className="font-normal cursor-pointer text-[14px] p-2">Development Tutorial</p>
            <p className="font-normal cursor-pointer text-[14px] p-2">How to - Blog</p>
            <p className="font-normal cursor-pointer text-[14px] p-2">Youtube Playlist</p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center justify-center lg:mt-[6rem] space-y-4">
            <div className="flex space-x-4">
              <img className="cursor-pointer" src={faceboook} alt="facebook" />
              <img className="cursor-pointer" src={twitter} alt="twitter" />
            </div>
            <div className="flex space-x-4">
              <img className="cursor-pointer" src={instagram} alt="instagram" />
              <img className="cursor-pointer" src={youtube} alt="youtube" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="w-full">
        <hr className="w-full relative" />
      </div>
    </>
  );
};

export default Footer;
