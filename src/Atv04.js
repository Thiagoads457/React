// src/Atv04.js
import React from "react";
import { Link } from "react-router-dom";

import './Atv04.css';

import Toolbar from "./componentes/Toolbar";
import Gallery from "./componentes/Gallery1"; // Renomeado por você
import Counter from "./componentes/Counter";
import Form from "./componentes/Form";
import MovingDot from "./componentes/MovingDot";
import Form2 from "./componentes/Form2";
import Form3 from "./componentes/Form3";
import List from "./componentes/List";
import List2 from "./componentes/List2";
import ShapeEditor from "./componentes/ShapeEditor";
import CounterList from "./componentes/CounterList";
import List3 from "./componentes/List3";
import List4 from "./componentes/List4";
import BucketList from "./componentes/BucketList";



export default function Atv04() {
  return (
    <div className="atv04-container">

        
      <h1>Atividade 04 - Componentes Interativos</h1>

      <section>
        <h2>1. Toolbar</h2>
        <Toolbar />
      </section>

      <section>
        <h2>2. Gallery</h2>
        <Gallery />
      </section>

      <section>
        <h2>3. Counter</h2>
        <Counter />
      </section>

      <section>
        <h2>4. Form</h2>
        <Form />
      </section>

      <section>
        <h2>5. MovingDot</h2>
        <MovingDot />
      </section>

      <section>
        <h2>6. Form2</h2>
        <Form2 />
      </section>

      <section>
        <h2>7. Form3</h2>
        <Form3 />
      </section>

      <section>
        <h2>8. List</h2>
        <List />
      </section>

      <section>
        <h2>9. List2</h2>
        <List2 />
      </section>

      <section>
        <h2>10. ShapeEditor</h2>
        <ShapeEditor />
      </section>

      <section>
        <h2>11. CounterList</h2>
        <CounterList />
      </section>

      <section>
        <h2>12. List3</h2>
        <List3 />
      </section>

      <section>
        <h2>13. List4</h2>
        <List4 />
      </section>

      <section>
        <h2>14. BucketList</h2>
        <BucketList />
      </section>
      <Link to="/" className="link-inferior">Voltar</Link>
    </div>
    
  );
}
