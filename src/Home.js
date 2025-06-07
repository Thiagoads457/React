import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return(
    <div className="home-container">
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Atv01">Atividade 01 - Letreiro e Relógio</Link>
          </li>
          <li>
            <Link to="/Atv02">Atividade 02 - Contador</Link>
          </li>
          <li>
            <Link to="/Atv03">Atividade 03 - Componentes</Link>
          </li>
          <li>
            <Link to="/Atv04">Atividade 04 - Componentes Interativos</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home;