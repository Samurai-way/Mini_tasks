import React, {useState} from 'react';
import './App.css';
import {AppProps, Father} from "./components/Star/Star";
import {OnnOff} from "./components/Onn/Off";
import {Accardion} from './components/Accardion/Accardion';
import { Clicker } from './components/Clicker/Clicker';


function App() {

    //
    let [call, setCall] = useState<boolean>(true)
    let [onn, setOnn] = useState<boolean>(true)
    let [value, setValue] = useState<AppProps>(0)


    return (
        <div className="App">
            <OnnOff on={onn} setOnn={setOnn}/>


            <Accardion collapsed={call} titleValue={'Hello'}
                       onClick={ () => {setCall(!call) } }
            />


            <Clicker/>


            <Father value={value} setValue={setValue}/>
        </div>
    );
}

export default App;
