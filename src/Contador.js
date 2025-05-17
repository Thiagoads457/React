import React, { useState } from 'react';
import './Contador.css';
import garotoImg from './img/garoto.png';
import meninaImg from './img/menina.png';

function BotaoContador({ onClick, children }) {
  return (
    <button onClick={onClick} className="botao-contador">
      {children}
    </button>
  );
}

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
          <BotaoContador onClick={() => setHomens(prev => prev + 1)}>
            +
          </BotaoContador>
          <BotaoContador onClick={() => setHomens(prev => Math.max(0, prev - 1))}>
            -
          </BotaoContador>
        </div>
        <div className="pessoa">
          <img src={meninaImg} alt="Mulher" className="imagem" />
          <h2>Mulheres: {mulheres}</h2>
          <BotaoContador onClick={() => setMulheres(prev => prev + 1)}>
            +
          </BotaoContador>
          <BotaoContador onClick={() => setMulheres(prev => Math.max(0, prev - 1))}>
            -
          </BotaoContador>
        </div>
      </div>
      <h2 className="total">Total: {total}</h2>
    </div>
  );
};

export default Contador;