import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla'
import BotonClear from './componentes/BotonClear';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    } else{
      alert("Por favor ingrese valores para realizar los calculos");
    }
  };

  return (
    <div className='App'>
      <div className='conetenedor-calculadora '>
        <Pantalla input={input}/>
        <div className='container-botones'>
        <div className='fila container row'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila container row'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila container row'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila container row'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila container row'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
        </div>
      </div>
      <footer>
	      <p> Created by EnriqueLabrada </p>
        <div className='enlaces d-flex'>
          <a href='https://github.com/EnriqueLabrada' rel='noreferrer' target='_blank'><i className='bi bi-github'></i></a>
          <a href='https://www.linkedin.com/in/enrique-labrada-rivero-814b4927a/' rel='noreferrer' target='_blank'><i className='bi bi-linkedin'></i></a>
          <a href='https://www.instagram.com/enri_labrada?igsh=MWdnMHZobXNmZGVjbQ==' rel='noreferrer' target='_blank'><i className='bi bi-instagram'></i></a>
        </div>
      	</footer>

    </div>
  );
}

export default App;
