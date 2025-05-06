// src/Letreiro.js
import React, { useState, useEffect } from 'react';
import './Letreiro.css';


function Letreiro() {
  const texto = "CONHEÇA A FATEC";
  const [textoExibido, setTextoExibido] = useState("");
  const [index, setIndex] = useState(0);
  const [pausa, setPausa] = useState(false);

  useEffect(() => {
    if (pausa) return;

    const intervalo = setInterval(() => {
      setTextoExibido((prev) => prev + texto[index]);
      setIndex((prevIndex) => prevIndex + 1);
    }, 200);

    if (index === texto.length) {
      clearInterval(intervalo);
      setPausa(true);
      setTimeout(() => {
        setTextoExibido("");
        setIndex(0);
        setPausa(false);
      }, 1000); 
    }

    return () => clearInterval(intervalo);
  }, [index, pausa]);

  return (
    <div className="letreiro">
      {textoExibido}
    </div>
  );
}

export default Letreiro;