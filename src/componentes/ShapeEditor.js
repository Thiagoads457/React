// src/componentes/ShapeEditor.js
import { useState } from "react";

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShapes(nextShapes);
  }

  return (
    <div
      className="shape-editor-container"
      style={{
        position: "relative",
        width: "400px",
        height: "300px",
        backgroundColor: "#eee",
        border: "1px solid #ccc",
        margin: "20px auto",
        overflow: "hidden", // Garante que os elementos não saiam para fora
      }}
    >
      <button onClick={handleClick} style={{ marginBottom: "10px" }}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
            background: "purple",
            position: "absolute",
            left: `${shape.x}px`,
            top: `${shape.y}px`,
            borderRadius: shape.type === "circle" ? "50%" : "",
            width: "20px",
            height: "20px",
          }}
        />
      ))}
    </div>
  );
}
