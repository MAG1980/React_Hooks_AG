import logo from './logo.svg';
import './App.css';
import {CounterFunc} from "./components/CounterFunc";
import {CounterClass} from "./components/CounterClass";

function App() {


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
            <div className="flex"><CounterFunc/></div>
            <div className="flex"><CounterClass/></div>
      </header>
    </div>
  );
}

export default App;
