import React, { useState } from 'react';

const Counter = ({ va, id, onDelete, increaseValue }) => {
  const [value, setValue] = useState(va);

  const Increasement = () => {
    setValue(value + 1);
  };

  const Decreasement = () => {
    setValue(value - 1);
  };

  const Reset = () => {
    setValue(va);
  };

  return (
    <div className="mb-2">
      <button className="btn">{id}</button>
      <button className="btn bg-warning">{va}</button>
      <button className="btn btn-primary mx-2" onClick={Increasement}>
        Increase
      </button>
      <button className="btn btn-danger me-2" onClick={Decreasement}>
        Decrease
      </button>
      <button className="btn btn-secondary me-2" onClick={Reset}>
        Reset
      </button>
      <button className="btn btn-info" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Counter;
