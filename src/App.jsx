import React from "react";
import MapRender from "./pages/MapRender";

const App = () => {
  const arr = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return <MapRender items={arr} />;
};

export default App;
