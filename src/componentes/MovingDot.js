// src/componentes/MovingDot.js
import { useState, useRef } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  function handlePointerMove(e) {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
        backgroundColor: "#eee",
        border: "1px solid #ccc",
        overflow: "hidden" // Garante que a bolinha não saia do container
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "#3498db", // Mudei para azul para combinar com o tema
          borderRadius: "50%",
          width: 20,
          height: 20,
          left: Math.max(0, Math.min(position.x, containerRef.current?.clientWidth || 0)),
          top: Math.max(0, Math.min(position.y, containerRef.current?.clientHeight || 0)),
          transform: "translate(-50%, -50%)",
          transition: "all 0.1s ease-out" // Adiciona suavização no movimento
        }}
      />
    </div>
  );
}