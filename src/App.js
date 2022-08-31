import './App.css';
import logo from './imagenes/React_logo.png'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import {useState} from 'react'
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    if (val === "π"){
      setInput(input + "3.1416");
    }else{
      setInput(input + val);
    }
    
  };

  const calcularResultado = () => {

    if(input){
      var originalDivide =  input.split("/");
      if(originalDivide[1]=== "0"){
        alert("No se puede dividir entre 0")
        setInput('');
      }
      else{
        setInput(evaluate(input));
      }
    }
    else{
      alert("Ingrese valores para realizar los calculos")
    }
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={logo}
          className='logo'
          alt='Logo' />
      </div>
      <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>(</Boton>
          <Boton manejarClic={agregarInput}>)</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>π</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>%</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
            </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
