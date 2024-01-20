import React from 'react';

const InputBox = ({ text, placeholder, value, onChange }) => {
  return (
    <form className="container mt-4">
      <div className="row align-items-center">
        <div className="col-2">
          <label htmlFor={`inputField-${text}`} className="form-label">
            {text}
          </label>
        </div>
        <div className="col-2">
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              id={`inputField-${text}`}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputBox;
