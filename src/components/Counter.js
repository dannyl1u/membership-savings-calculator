import React from "react";

const Counter = ({ count, setCount }) => {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(Math.max(0, count - 1)); // Prevents the count from going below 0
  };

  const handleInputChange = (e) => {
    setCount(e.target.value);
  }

  return (
    <div className="container mt-4">
      <div className="row align-items-center">
        <div className="col-2">
          Number of days on pass:
        </div>
        <div className="col-2">
          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-danger me-2" onClick={decrement}>-</button>
            <input type="number" className="form-control" onChange={handleInputChange} value={count} />
            <button type="button" className="btn btn-success ms-2" onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
