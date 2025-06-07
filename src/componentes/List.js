// src/componentes/List.js
export default function List() {
  const artists = [
    { id: 1, name: "Vincent van Gogh", style: "Pós-impressionismo" },
    { id: 2, name: "Frida Kahlo", style: "Surrealismo" },
    { id: 3, name: "Pablo Picasso", style: "Cubismo" },
    { id: 4, name: "Leonardo da Vinci", style: "Renascimento" }
  ];

  return (
    <ul>
      {artists.map(artist => (
        <li key={artist.id}>
          <strong>{artist.name}</strong> - {artist.style}
        </li>
      ))}
    </ul>
  );
}
