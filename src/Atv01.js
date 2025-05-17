import Letreiro from "./Letreiro";
import Relogio from "./Relogio";
import "./Atv01.css";

import {Link} from "react-router-dom";

function Atv01(){
    return (
        <div className="componentes-container">
            <h2 className="titulo-superior">Atividade 01</h2>
            
            <div className="componente">
                <Relogio className="relogio"/>
            </div>
            
            <div className="componente">
                <Letreiro className="letreiro"/>
            </div>
            
            <Link to="/" className="link-inferior">Voltar</Link>
        </div>
    );
}

export default Atv01;