import React from "react";
const Button = ({ label }) => {
  return (
    <button className="bg-white text-lg text-[#180432] hover:bg-[#180432] hover:text-white font-bold py-3 px-6 rounded-full">
      {label}
    </button>
  );
};

export default Button;
