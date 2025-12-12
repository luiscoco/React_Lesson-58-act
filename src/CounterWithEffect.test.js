import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { act } from 'react';
import { CounterWithEffect } from './CounterWithEffect';

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

test('initial render fully settles before assertions', async () => {
  await act(async () => {
    root.render(<CounterWithEffect />);
  });

  const label = container.querySelector('[data-testid="count-label"]');
  expect(label.textContent).toBe('You clicked 0 times');
  expect(document.title).toBe('You clicked 0 times');
});

test('increments count when button is clicked', async () => {
  await act(async () => {
    root.render(<CounterWithEffect />);
  });

  const button = container.querySelector('[data-testid="increment-button"]');
  const label = container.querySelector('[data-testid="count-label"]');

  await act(async () => {
    button.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
  });

  expect(label.textContent).toBe('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');
});
