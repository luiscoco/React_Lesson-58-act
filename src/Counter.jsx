import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="count-label">You clicked {count} times</p>
      <button
        data-testid="increment-button"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click me
      </button>
    </div>
  );
}