
import React, { useEffect, useState } from 'react';
import './Relogio.css';

function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const horas = String(horaAtual.getHours()).padStart(2, '0');
  const minutos = String(horaAtual.getMinutes()).padStart(2, '0');
  const segundos = String(horaAtual.getSeconds()).padStart(2, '0');

  return (
    <div className="Relogio">
      {`${horas}:${minutos}:${segundos}`}
    </div>
  );
}

export default Relogio;