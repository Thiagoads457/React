// src/componentes/Toolbar.js
export function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Tocando música!">Tocar</AlertButton>
      <AlertButton message="Enviando imagem!">Upload</AlertButton>
    </div>
  );
}
