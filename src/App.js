import React, { useState } from 'react';
import {Message} from './Message.js'
import './App.css';

function App() {
  let [count, setCount] = useState(1);
  let [isMorning,setMorning] = useState(false);
  //count = 1;
  //setCount(2) // always setter
    return (
      <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Day time = {isMorning ? 'Morning' : 'Night'}</h1>
        Value of counter variable is {count}
        <br/>
        Message From component <br/>
        <Message counter={count}/>
        <br/>
        <button onClick={()=>setCount(++count)}>Updater counter</button>
        <button onClick={()=>setMorning(!isMorning)}>Updater day</button>
      </div>
    );
}

export default App;
