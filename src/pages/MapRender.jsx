import React from "react";

const MapRender = () => {
  const arr = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <ul className="list-disc p-10">
      {arr.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default MapRender;
