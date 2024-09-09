import React, { useState, useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen width
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 425);
  };

  // Check on component mount and resize
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="grid">
        <div></div>
        <div>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          {isMobile ? <MobileFooter /> : <Footer />}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Hero;
