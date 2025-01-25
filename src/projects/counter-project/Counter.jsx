import { useState } from 'react';
import './Counter.css';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="number">{count}</div>
      <div className="btns-container">
        <button className="decrement" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className="increment" onClick={() => setCount(count - 1)}>
          Decrease
        </button>
      </div>
    </div>
  );
}
export default Counter;
