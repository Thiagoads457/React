// src/componentes/BucketList.js
import { useState } from "react";

let nextId = 3;

export default function BucketList() {
  const [tasks, setTasks] = useState([
    { id: 0, text: "Visitar o Japão", done: false },
    { id: 1, text: "Aprender React", done: true },
    { id: 2, text: "Escrever um livro", done: false }
  ]);

  const [text, setText] = useState("");

  function handleAddTask() {
    if (text.trim() === "") return;
    setTasks([
      ...tasks,
      { id: nextId++, text, done: false }
    ]);
    setText("");
  }

  function handleToggleDone(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  function handleRemove(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div>
      <h3>Bucket List</h3>
      <input
        placeholder="Nova tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTask}>Adicionar</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <label style={{ textDecoration: task.done ? "line-through" : "none" }}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleToggleDone(task.id)}
              />
              {task.text}
            </label>
            <button onClick={() => handleRemove(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
