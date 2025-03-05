import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <div>
      <div className="text-4xl text-center text-green-500 font-bold p-10">
        Chalu Hai Bhai 🔥🔥
      </div>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
