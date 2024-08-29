// src/CounterComponent.js
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import "../style.css"

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const countRef = useRef();
  const previousCount = useRef();

  // Memoize the double of count to avoid unnecessary calculations
  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  // Increment the count
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + step);
  }, [step]);

  // Decrement the count
  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - step);
  }, [step]);

  // Track the previous count value
  useEffect(() => {
    previousCount.current = countRef.current;
    countRef.current = count;
  }, [count]);

  // Log the current count to the console whenever it changes
  useEffect(() => {
    console.log('Count:', count);
  }, [count]);

  return (
    <div>
      <h1>React Hooks Example</h1>
      <p>Count: {count}</p>
      <p>Previous Count: {previousCount.current}</p>
      <p>Double Count: {doubleCount}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default CounterComponent;
