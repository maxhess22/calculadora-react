import React from "react";

function Pantalla({valor}){
    return(
        <input type="text"  className="pantalla" disabled="disabled" value={valor}/>
    );
}
export default Pantalla;