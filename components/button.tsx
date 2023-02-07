import React from "react";
const Button = ({ label }) => {
  return (
    <button className="bg-white hover:bg-[#f4a15c] hover:text-white text-black font-bold py-2 px-4 rounded-full">
      {label}
    </button>
  );
};

export default Button;
