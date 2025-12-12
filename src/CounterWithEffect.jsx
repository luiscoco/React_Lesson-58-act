import React, { useEffect, useState } from 'react';

export function CounterWithEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

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