// src/componentes/Button.js

import React from "react";

// Componente base reutilizável
export function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// Componente com comportamento específico
export function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

export function UploadButton() {
  return (
    <Button onClick={() => alert("Uploading!")}>
      Upload Image
    </Button>
  );
}

// Exemplo de uso
export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

