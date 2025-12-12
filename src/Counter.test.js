import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { act } from 'react';
import { Counter } from './Counter';

let container;
let root;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = ReactDOMClient.createRoot(container);
});

afterEach(() => {
  act(() => {
    root.unmount();
  });
  document.body.removeChild(container);
  container = null;
  root = null;
});

test('initial render is wrapped in act', async () => {
  await act(async () => {
    root.render(<Counter />);
  });

  const label = container.querySelector('[data-testid="count-label"]');
  expect(label.textContent).toBe('You clicked 0 times');
});
