// src/componentes/Form2.js
import { useState } from "react";

export default function Form2() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Nome: ${form.name}\nEmail: ${form.email}`);
    setForm({ name: "", email: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
