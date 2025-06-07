// src/componentes/List2.js
import { useState } from "react";

export default function List2() {
  const [artists, setArtists] = useState([
    { id: 1, name: "Vincent van Gogh" },
    { id: 2, name: "Frida Kahlo" },
    { id: 3, name: "Pablo Picasso" },
    { id: 4, name: "Leonardo da Vinci" }
  ]);

  function handleRemove(id) {
    setArtists(artists.filter(artist => artist.id !== id));
  }

  return (
    <>
      <h3>Clique em um artista para removê-lo:</h3>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            <button onClick={() => handleRemove(artist.id)}>
              Remover
            </button>{" "}
            {artist.name}
          </li>
        ))}
      </ul>
    </>
  );
}
