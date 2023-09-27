import React from "react";
import StateProps from "./pages/StateProps";

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="grid h-screen place-content-center">
      <h3>
        You have clicked me {count > 1 ? count + " times" : count + " time"}{" "}
      </h3>
      <StateProps handleClick={() => setCount((count) => count + 1)} />
    </div>
  );
};

export default App;
