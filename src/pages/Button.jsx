import React from "react";

const Button = ({ id }) => {
  return (
    <button
      className="w-fit border p-2"
      onClick={() => alert(`button ${id} clicked`)}
    >
      Button ${id}
    </button>
  );
};

export default Button;
