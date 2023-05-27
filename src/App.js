import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item +1)

  const decreaseItem = () => setItem(item-1)

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         <div>
             <div>Item: {item}</div>
             <button onClick={incrementItem}>Увеличить</button>
             <button onClick={decreaseItem}>Уменьшить</button>
         </div>
      </header>
    </div>
  );
}

export default App;
