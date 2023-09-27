import { list } from "postcss";
import React from "react";

const MapRender = ({ items }) => {
  return (
    <ul className="p-10">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default MapRender;
