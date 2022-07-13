import React, { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, value: 5 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const deleteCounter = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const addCounter = () => {
    const id = items[items.length - 1]?.id || 0;
    setItems([...items, { id: id + 1, value: 10 }]);
  };

  const _CartNum = ({ newItem }) => {
    const newItems = newItem.filter((item) => item.value > 0);
    return newItems.length;
  };

  const IncreaseValue = (id) => {
    const newItems = [...items];
    const index = items.findIndex((item) => item.id === id);
    newItems[index].value = items[index].value + 1;
    setItems(newItems);
  };

  return (
    <div className="p-3">
      <h5>
        Cart{' '}
        <span className="text-danger badge bg-info">
          <_CartNum newItem={items} />
        </span>
      </h5>
      {items.map((item) => (
        <div key={item.id}>
          <Counter
            va={item.value}
            id={item.id}
            onDelete={deleteCounter}
            IncreaseValue={IncreaseValue}
          />
        </div>
      ))}
      <button className="btn btn-secondary" onClick={addCounter}>
        +
      </button>
      <button className="btn btn-secondary" onClick={() => IncreaseValue(1)}>
        index
      </button>
    </div>
  );
};

export default App;
