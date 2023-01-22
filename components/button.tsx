import React from "react";
const Button = ({ label }) => {
  return (
    <button className="bg-[#f1852c] hover:bg-[#f4a15c] text-[#852cf1] font-bold py-2 px-4 rounded-full">
      {label}
    </button>
  );
};

export default Button;
