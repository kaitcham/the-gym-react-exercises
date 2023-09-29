import React from "react";

const Button = () => {
  return (
    <div className="grid h-screen place-content-center">
      <button
        className="w-fit border p-2"
        onClick={() => alert("button clicked!")}
      >
        Button
      </button>
    </div>
  );
};

export default Button;
