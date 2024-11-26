import { ClickButtonProps } from "@/types";
import React from "react";

const Clickbutton: React.FC<ClickButtonProps> = ({ text, color, type, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`text-white bg-gradient-to-br ${color} hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
      >
        {text}
      </button>
    </div>
  );
};

export default Clickbutton;
