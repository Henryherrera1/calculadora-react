import './App.css';
import logotipo from './img/img-matamune.png';
import Button from './componentes/button/button.jsx';
import Pantalla from './componentes/pantalla/pantalla.jsx';
import ButtonClear from './componentes/buttonClear/ButtonClear.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const result = () => {
    if(input){
      setInput(evaluate(input))
    }else{
      alert('Por favor, valida tu operacion')
    }
  }

  return (
    <div className="App">
      <div className='logo'>
        <img
          src={logotipo}
          className='logo-calculator'
          alt='logotipo de calculadora interactiva'
        />
      </div>
      <div className='principal-counter'>
        <Pantalla input={input} />
        <div className='fila'>
          <Button manejarClic={addInput}>1</Button>
          <Button manejarClic={addInput}>2</Button>
          <Button manejarClic={addInput}>3</Button>
          <Button manejarClic={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={addInput}>4</Button>
          <Button manejarClic={addInput}>5</Button>
          <Button manejarClic={addInput}>6</Button>
          <Button manejarClic={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={addInput}>7</Button>
          <Button manejarClic={addInput}>8</Button>
          <Button manejarClic={addInput}>9</Button>
          <Button manejarClic={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={result}>=</Button>
          <Button manejarClic={addInput}>0</Button>
          <Button manejarClic={addInput}>.</Button>
          <Button manejarClic={addInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear manejarClear={()=> setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
