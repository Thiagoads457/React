// src/componentes/Gallery.js
import { useState } from 'react';

const gallery = [
  {
    name: "Escultura 1",
    artist: "Artista A",
    url: "https://i.imgur.com/Mx7dA2Y.jpg"
  },
  {
    name: "Escultura 2",
    artist: "Artista B",
    url: "https://i.imgur.com/ZF6s192m.jpg"
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((i) => (i + 1) % gallery.length);
  }

  const sculpture = gallery[index];

  return (
    <div>
      <button onClick={next}>Próximo</button>
      <h2>{sculpture.name}</h2>
      <h3>{sculpture.artist}</h3>
      <img src={sculpture.url} alt={sculpture.name} width="300" />
    </div>
  );
}
