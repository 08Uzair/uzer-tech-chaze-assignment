import React from "react";
import hero from "../images/hero.png";
const Section1 = () => {
  return (
    <div>
      <section className="bg-white-100  h-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
          {/* Text Content */}
          <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
            <h1
              style={{
                fontSize: "70px",
                lineHeight: "4.5rem",
              }}
              className="manuale text-4xl font-bold text-gray-800 mb-4 txt1 "
            >
              Empower Hope,
              <br />
              Transform Lives
            </h1>
            <p className="txt2 text-black font-medium  ">
              Discover the future of technology with our cutting-edge solutions
              and expertise. From innovative apps to seamless integrations, we
              provide the tools you need to thrive.
            </p>
          </div>
          {/* Image with border */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img src={hero} className="w-full h-auto  rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
