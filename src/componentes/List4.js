// src/componentes/List4.js
import { useState } from "react";

let nextId = 4;

export default function List4() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([
    { id: 1, name: "Van Gogh" },
    { id: 2, name: "Frida Kahlo" },
    { id: 3, name: "Picasso" }
  ]);

  function handleAdd() {
    if (name.trim() === "") return;

    setArtists([
      ...artists,
      { id: nextId++, name }
    ]);
    setName("");
  }

  return (
    <>
      <h3>Adicionar artista</h3>
      <input
        placeholder="Nome do artista"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>

      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
