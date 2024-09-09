import React from 'react'

const Button = ({label}) => {
  return (
    <div>
         <button 
              style={{
                borderTopWidth: "0px",
                borderRightWidth: "1.5px",
                borderBottomWidth: "1.5px",
                borderLeftWidth: "0px",
                borderStyle: "solid",
                borderColor: "#16442C",
              }}
              className="bg-[#F8F6E4] w-[162px] h-[60px] hover:bg-[#FDC138] hover:border-[#AF8523] text-black px-4 py-2 text-[16px] font-medium rounded-full"
            >
              {label}
            </button>
    </div>
  )
}

export default Button