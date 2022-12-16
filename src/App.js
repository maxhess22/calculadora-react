import React, { useState } from 'react';
import Boton from './components/boton';
import Pantalla from './components/pantalla';
import {evaluate} from 'mathjs'




function App() {
  let [valor, setValor]= useState([ ])


  
  
    return(
      <React.Fragment>
        <h1 className="title">Calculadora react</h1>
        <div className="contenedor-calculadora">
          <Pantalla valor={valor} />
          <div className='contenedor'>
            <Boton nombre="7" metodo={()=> setValor(valor+ "7")} />
            <Boton nombre="8" metodo={()=> setValor(valor+ "8")} />
            <Boton nombre="9" metodo={()=> setValor(valor+ "9")} />
            <Boton nombre="X" metodo={()=> (setValor(valor+"*"))} />
          </div>
          <div className='contenedor'>
            <Boton nombre="4" metodo={()=> setValor(valor+ "4" )} />
            <Boton nombre="5" metodo={()=> setValor(valor+ "5" )} />
            <Boton nombre="6" metodo={()=> setValor(valor+ "6")} />
            <Boton nombre="-" metodo={()=> ( setValor(valor+"-") )} />
          </div>
          <div className='contenedor'>
            <Boton nombre="1" metodo={()=> setValor(valor+ "1")} />
            <Boton nombre="2" metodo={()=> setValor(valor+ "2")} />
            <Boton nombre="3" metodo={()=> setValor(valor+ "3" )} />
            <Boton nombre="+" metodo={()=> setValor(valor+"+")}/>
          </div> 
          <div className='contenedor'>
            <Boton nombre="0" metodo={()=> setValor(valor+ "0")} />
            <Boton nombre="." metodo={()=> setValor(valor+".")} />
            <Boton nombre="DEL" metodo={()=> setValor(" ")} />
            <Boton nombre="/" metodo={()=> setValor(valor+ "/")} />
          </div>
          <div>
          <Boton nombre="=" metodo={()=> setValor(evaluate(valor))} />
          </div>
        </div>
      </React.Fragment>
    );
  }

export default App;
