import React from "react";
import Button from "./pages/Button";

const App = () => {
  return (
    <div className="flex h-screen place-content-center items-center gap-5">
      {Array.from({ length: 3 }).map((_, i) => (
        <Button key={i} id={i + 1} />
      ))}
    </div>
  );
};

export default App;
