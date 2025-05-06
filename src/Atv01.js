import Letreiro from "./Letreiro";
import Relogio from "./Relogio";

import {Link} from "react-router-dom";


function Atv01(){
    return (
        <>
            <h2 className="titulo-superior">Atividade 01</h2>
            
            <Relogio/>
            <Letreiro/>
            <Link to="/" className="link-inferior">Voltar</Link>
        </>
    );
}
export default Atv01;