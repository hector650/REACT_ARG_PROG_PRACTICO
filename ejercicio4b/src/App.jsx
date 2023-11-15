
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import './boostrap.css';
import { todos } from './data.json';

function Crear() {
  
  return (
    <>
      {todos.map((candidato) => (
        
        <App nombre={candidato.nombre} key={candidato.id}  />
      ))}
    </>
  );
}

function App(props) {  
  const { nombre } = props || {};


  const [count, setCount] = useState(0);

  const aumentar = () => {setCount((prevCount) => prevCount + 1); };

  const decrementar = () => {if (count > 0) {setCount((prevCount) => prevCount - 1);}else{
    alert('Valores Negativos no aseptados')
  }
  };
  return (
    <>
      <div className='card tarjeta'>
        <div className=''>
        <h3>{ nombre }</h3>
          <a href="#" target="_blank">
          </a>
          <a href="#" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className='text-primary'> {count}</h1>
        <div className="d-flex justify-content-between">
          <button className='h2' onClick={aumentar}>+</button>
          <button className='h2' onClick={decrementar}>-</button>
        </div>
      </div>
    </>
  );
}

export {Crear};

