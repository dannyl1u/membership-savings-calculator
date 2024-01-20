import React from "react";

const Counter = ({ count, setCount }) => {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(Math.max(0, count - 1)); // Prevents the count from going below 0
  };

  return (
    <div className="container mt-4">
      <div className="row align-items-center">
        <div className="col-2">
          Number of days on pass:
        </div>
        <div className="col-2">
          <button onClick={decrement}>-</button>
          <span style={{ margin: "0 10px" }}>{count}</span>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
