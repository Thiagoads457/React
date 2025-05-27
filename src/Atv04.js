import AlertButton from "./componentes/AlertButton";
import Button from "./componentes/Button";

import './Atv04.css'

import { Link } from "react-router-dom";



function Atv04() {
    return (
        <>
            <div className="container">
                <div className="button">
                    <Button />

                </div>
                <div className="alert">
                    <AlertButton />
                </div> 
            </div>
           
        </>
    );
}
export default Atv04;