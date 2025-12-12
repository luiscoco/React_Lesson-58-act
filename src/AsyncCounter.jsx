import React, { useState } from 'react';

export function AsyncCounter() {
  const [count, setCount] = useState(0);

  const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 10);
  };

  return (
    <div>
      <p data-testid="count-label">You clicked {count} times</p>
      <button
        data-testid="async-button"
        onClick={handleAsyncIncrement}
      >
        Increment async
      </button>
    </div>
  );
}