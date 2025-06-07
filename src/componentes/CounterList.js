// src/componentes/CounterList.js
import { useState } from "react";

export default function CounterList() {
  const [counters, setCounters] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 }
  ]);

  function handleIncrement(id) {
    setCounters(
      counters.map(counter => {
        if (counter.id === id) {
          return {
            ...counter,
            value: counter.value + 1
          };
        } else {
          return counter;
        }
      })
    );
  }

  return (
    <>
      <h3>Lista de Contadores</h3>
      <ul>
        {counters.map(counter => (
          <li key={counter.id}>
            <button onClick={() => handleIncrement(counter.id)}>
              Contador {counter.id + 1}: {counter.value}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
