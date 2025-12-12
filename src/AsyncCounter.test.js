import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { AsyncCounter } from './AsyncCounter';

let container;
let root;

beforeEach(() => {
  jest.useFakeTimers();
  container = document.createElement('div');
  document.body.appendChild(container);
  root = ReactDOMClient.createRoot(container);
});

afterEach(() => {
  root.unmount();
  document.body.removeChild(container);
  container = null;
  root = null;
  jest.useRealTimers();
});

test('await act(async () => ...) waits for async updates', async () => {
  await act(async () => {
    root.render(<AsyncCounter />);
  });

  const button = container.querySelector('[data-testid="async-button"]');
  const label = container.querySelector('[data-testid="count-label"]');

  await act(async () => {
    button.click();
    jest.runAllTimers();
  });

  expect(label.textContent).toBe('You clicked 1 times');
});