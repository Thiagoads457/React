

import Contador from "./Contador";
import {Link} from "react-router-dom";
import "./Atv02.css";


function Atv02(){
    return (
        <>
            <h2 className="titulo-superior">Atividade 02</h2>
            <Contador/>
            
            <Link to="/" className="link-inferior">Voltar</Link>
        </>
    );
}
export default Atv02;