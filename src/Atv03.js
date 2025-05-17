import Gallery from "./componentes/Gallery";
import Profile from "./componentes/Profile";
import TodoList from "./componentes/TodoList";
import "./Atv03.css";


import { Link } from "react-router-dom";



function Atv03() {
    return (
        <>
            < div className="atv03-container">
                <h2 className="titulo-superior">Atividade 03</h2>
                <h1>Grandes Compositores</h1>
                
                <div className="galeria">
                
                    <TodoList />
                </div>
                <Gallery/>
                <Link to="/" className="link-inferior">Voltar</Link>
            </div >
        </>
    );
}
export default Atv03;