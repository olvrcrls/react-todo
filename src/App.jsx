import logo from './logo.svg';
import './App.css';
import Another from './Another';
import { useState } from 'react';

function App() {
  /**
   * States
   * const [getterVar, setterVar] = value
   */
  const [count, setCount] = useState(0);

  /**
   * Event functions
   */
  let decrement = () => {
    setCount(prevCount => count - 1);
  }

  let increment = () => {
    setCount(prevCount => count + 1);
  }

  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold'
  }

  return (

    <div className="App">
      <label htmlFor=""></label>
      <header className="App-header">
        <Another name="Oliver" />
        <div>
          <span>{ count }</span>
          <button onClick={ decrement }>-</button>
          <button onClick={ increment }>+</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        { true &&
            <p style={ someStyle }>{ 3 + 2 }</p>
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
