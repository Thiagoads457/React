// src/componentes/Form.js
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    alert(`Bem-vindo, ${name}!`);
    setName(""); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
