import logo from './logo.svg';
import './App.css';
import {CounterFunc} from "./components/CounterFunc";
import {CounterClass} from "./components/CounterClass";
import {Input} from "./components/Input";
import {Tabs} from "./components/Tabs"
import {useInput} from "./hooks/useInput";
import {useTitle} from "./hooks/useTitle";
import {ClickedTitle} from "./components/ClickedTitle";
import {HoveredTitle} from "./components/HoveredTitle";
import {Confirm} from "./components/Confirm";
import {PreventLeave} from "./components/PreventLeave";
import {BeforeLeave} from "./components/BeforeLeave";
import {FadeIn} from "./components/FadeIn";
import {UseNetworkExample} from "./components/UseNetworkExample";
import {UseScrollExample} from "./components/UseScrollExample";

function App() {
    const {value: name, onChange} = useInput('InitialName')

    const titleUpdater = useTitle('Загрузка...')

    return (
        <div className="App" style={{height: "200vh"}}>
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
                <div>
                    <Input value={name} onChange={onChange}/>
                    <div>{name}</div>
                </div>
                <div>
                    <Tabs/>
                </div>
                <div>
                    <button onClick={()=>titleUpdater(name)}>Обновить Title</button>
                </div>
                <ClickedTitle/>
                <HoveredTitle/>
                <Confirm/>
                <PreventLeave/>
                <BeforeLeave/>
                <FadeIn/>
                <UseNetworkExample/>
                <UseScrollExample/>
            </header>
        </div>
    );
}

export default App;
