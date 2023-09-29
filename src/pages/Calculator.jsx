import React from "react";
import { keyPads, calculate } from "../utils/keyPads";

const Calculator = () => {
  const [result, setResult] = React.useState(0);
  const [operator, setOperator] = React.useState(null);
  const [lastValue, setlastValue] = React.useState(null);
  const [nextValue, setNextValue] = React.useState(false);

  const handleClear = () => {
    setResult(0);
    setOperator(null);
    setlastValue(null);
    setNextValue(false);
  };

  const handleEqual = () => {
    if (!operator || !lastValue || !result) return;

    setOperator(null);
    setNextValue(false);
    setlastValue(null);
    setResult(calculate(Number(lastValue), Number(result), operator));
  };

  const handleClick = (event) => {
    const { textContent } = event.target;

    if (textContent === "=") return handleEqual();
    if (textContent === "AC") return handleClear();
    if (textContent === "%") return setResult(result / 100);
    if (textContent === "+/-") return setResult(result * -1);

    if (
      !operator &&
      (Number(textContent) || textContent === "0" || textContent === ".")
    ) {
      setResult(
        result === 0 && textContent !== "."
          ? Number(textContent)
          : result + textContent,
      );
    } else if (operator) {
      if (
        nextValue &&
        (Number(textContent) || textContent === "0" || textContent === ".")
      ) {
        setResult(textContent);
        setNextValue(false);
      }
      if (
        !nextValue &&
        (Number(textContent) || textContent === "0" || textContent === ".")
      ) {
        setResult(result + textContent);
      } else {
        if (!nextValue && lastValue) {
          const resultValue = calculate(
            Number(lastValue),
            Number(result),
            operator,
          );
          setResult(resultValue);
          setlastValue(resultValue);
          setNextValue(true);
          setOperator(textContent);
        }
      }
    } else {
      setNextValue(true);
      setlastValue(result);
      setOperator(textContent);
    }
  };

  return (
    <div className="mx-auto h-fit w-1/4">
      <div className="flex justify-end bg-black px-5 py-3 text-3xl text-white">
        {result}
      </div>
      <div className="grid grid-cols-4 [&>*:nth-child(4n)]:bg-orange-500 [&>button]:border [&>button]:p-6 [&>button]:text-lg">
        {keyPads.map((key, index) => (
          <button
            key={key}
            onClick={handleClick}
            className={key === "0" ? "col-span-2" : ""}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
