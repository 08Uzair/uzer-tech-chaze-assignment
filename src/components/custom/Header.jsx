import React from "react";

const Header = ({ title, content }) => {
  return (
    <div className="text-center m-[2rem]">
      <h1 className="text-[40px] manuale font-semibold">{title}</h1>
      <h3 className="text-[20px] font-medium">{content}</h3>
    </div>
  );
};

export default Header;
