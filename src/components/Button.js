import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-1 mx-1 my-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
