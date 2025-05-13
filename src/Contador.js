import React, { useState } from 'react';
import './Contador.css';
import garotoImg from './img/garoto.png';
import meninaImg from './img/menina.png';

const Contador = () => {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const total = homens + mulheres;

  return (
    <div className="contador-container">
      <h1>Contador de Homens e Mulheres</h1>
      <div className="contador">
        <div className="pessoa">
          <img src={garotoImg} alt="Homem" className="imagem" />
          <h2>Homens: {homens}</h2>
          <button onClick={() => setHomens(homens + 1)}>+</button>
          <button onClick={() => setHomens(Math.max(0, homens - 1))}>-</button>
        </div>
        <div className="pessoa">
          <img src={meninaImg} alt="Mulher" className="imagem" />
          <h2>Mulheres: {mulheres}</h2>
          <button onClick={() => setMulheres(mulheres + 1)}>+</button>
          <button onClick={() => setMulheres(Math.max(0, mulheres - 1))}>-</button>
        </div>
      </div>
      <h2>Total: {total}</h2>
    </div>
  );
};

export default Contador;