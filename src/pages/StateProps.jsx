import React from "react";

const StateProps = ({ handleClick }) => {
  return (
    <button className="mt-5 border p-2" onClick={handleClick}>
      Click me
    </button>
  );
};

export default StateProps;
