// src/componentes/Form3.js
import { useState } from "react";

export default function Form3() {
  const [person, setPerson] = useState({
    name: "João",
    artwork: {
      title: "Sem Título",
      city: "São Paulo"
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  return (
    <div>
      <label>
        Nome:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Título da Obra:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Cidade:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <br />
      <p>
        <strong>{person.name}</strong> criou a obra <em>{person.artwork.title}</em> em <u>{person.artwork.city}</u>.
      </p>
    </div>
  );
}
