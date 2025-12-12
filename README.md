# Lesson 58 – act Playground

This is a minimal Jest + React Testing Library playground for experimenting with React's `act` helper.

## Preview

<img width="1225" height="439" alt="image" src="https://github.com/user-attachments/assets/8f43ece9-74b3-474a-b567-ac65d5953d94" />

## App features (with code)

- `Counter` — synchronous state update with a button click.

```jsx
// src/Counter.jsx
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p data-testid="count-label">You clicked {count} times</p>
      <button data-testid="increment-button" onClick={() => setCount((prev) => prev + 1)}>
        Click me
      </button>
    </div>
  );
}
```

- `AsyncCounter` — uses `setTimeout` to update state asynchronously.

```jsx
// src/AsyncCounter.jsx
export function AsyncCounter() {
  const [count, setCount] = useState(0);
  const handleAsyncIncrement = () => {
    setTimeout(() => setCount((prev) => prev + 1), 10);
  };
  return (
    <div>
      <p data-testid="count-label">You clicked {count} times</p>
      <button data-testid="async-button" onClick={handleAsyncIncrement}>
        Increment async
      </button>
    </div>
  );
}
```

- `CounterWithEffect` — updates `document.title` via `useEffect` on every count change.

```jsx
// src/CounterWithEffect.jsx
export function CounterWithEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <p data-testid="count-label">You clicked {count} times</p>
      <button data-testid="increment-button" onClick={() => setCount((prev) => prev + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Tests overview (with code)

- Initial render wrapped in `act` to flush effects.

```js
// src/Counter.test.js
await act(async () => {
  root.render(<Counter />);
});
expect(container.querySelector('[data-testid="count-label"]').textContent).toBe('You clicked 0 times');
```

- Async updates are awaited with fake timers and `await act(...)`.

```js
// src/AsyncCounter.test.js
await act(async () => {
  button.click();
  jest.runAllTimers();
});
expect(label.textContent).toBe('You clicked 1 times');
```

- DOM events and side effects (title) are asserted after `act`.

```js
// src/CounterWithEffect.test.js
await act(async () => {
  button.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
});
expect(label.textContent).toBe('You clicked 1 times');
expect(document.title).toBe('You clicked 1 times');
```

## Install

```bash
npm install
# If Vite is missing, add it locally:
npm install --save-dev vite @vitejs/plugin-react
```

## Run the app

```bash
npx vite dev
```

- Open the URL Vite prints (default: http://localhost:5173).

## Run tests

```bash
npm test
```

The tests demonstrate:

- Wrapping initial renders in `act`.
- Using `await act(async () => ...)` for async updates.
- Dispatching DOM events inside `act`.
- Configuring `global.IS_REACT_ACT_ENVIRONMENT = true` in `setupTests.js`.

<img width="888" height="494" alt="image" src="https://github.com/user-attachments/assets/bff812c8-5610-4364-b122-c77d92d0da38" />

