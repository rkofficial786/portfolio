import React from "react";

const Faded = ({ text }) => {
  return (
    <div>
      <h1 className="text-[6em]  text-gray-400 font-extrabold select-none">
        {text}
      </h1>
    </div>
  );
};

export default Faded;
