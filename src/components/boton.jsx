import React from "react";


function Boton ({nombre, metodo}){
    return(
        <button className="boton" onClick={metodo}>{nombre}</button>

    );
}

export default Boton;