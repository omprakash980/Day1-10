import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time,setTime] = useState(0);
  const [running,setRunning] = useState(false);

  useEffect(()=>{
    let interval;
    if(running){
      interval=setInterval(()=>{
        setTime((prevTime)=>prevTime + 10);
      },10);
    }else if(!running){
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  },[running]);

  return (
    <>
    <h1>Stop-Watch</h1>
    <div>
    <span>{("0" + Math.floor((time/60000) %60)).slice(-2)}:</span>
    <span>{("0" + Math.floor((time/1000) %60)).slice(-2)}:</span>
    <span>{("0"+((time/10)  % 100)).slice(-2)}</span>
    </div>
    <br></br>
    <div>
      <button onClick={()=>setRunning(true)}>Start</button>
      <span>                       </span>
      <button onClick={()=>setRunning(false)}>STOP</button>
      <span>          </span>
      <button onClick={()=>setTime(0)}>RESET</button>
    </div>
        
    </>
  )
}

export default App
