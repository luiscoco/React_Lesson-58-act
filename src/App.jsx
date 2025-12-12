import React from 'react';
import { Counter } from './Counter.jsx';
import { AsyncCounter } from './AsyncCounter.jsx';
import { CounterWithEffect } from './CounterWithEffect.jsx';

function Card({ title, children }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <main className="page">
      <header>
        <h1>React act playground</h1>
        <p>Experiment with components used in the tests.</p>
      </header>

      <div className="grid">
        <Card title="Counter">
          <Counter />
        </Card>

        <Card title="Async Counter">
          <AsyncCounter />
        </Card>

        <Card title="Counter with effect">
          <CounterWithEffect />
        </Card>
      </div>
    </main>
  );
}
