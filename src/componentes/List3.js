// src/componentes/List3.js
import { useState } from "react";

export default function List3() {
  const [artists, setArtists] = useState([
    { id: 1, name: "Vincent van Gogh" },
    { id: 2, name: "Frida Kahlo" },
    { id: 3, name: "Pablo Picasso" }
  ]);

  function handleChange(id, newName) {
    setArtists(
      artists.map(artist =>
        artist.id === id
          ? { ...artist, name: newName }
          : artist
      )
    );
  }

  return (
    <div>
      <h3>Editar nomes dos artistas:</h3>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            <input
              type="text"
              value={artist.name}
              onChange={e => handleChange(artist.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
