// 外部套件
import { useState, useEffect } from 'react'
import axios from "axios"

// 內部相關
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from "./components/Input.jsx"
// import "./assets/all.scss"
import "./assets/all.scss"

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("");
  const onChangeHandler = (e)=>{
    setText(e.target.value)
  }

  useEffect(()=>{
    (async()=>{
      const path = import.meta.env.VITE_RANDOM_URL;
      const result = await axios.get(path);
      console.log(result);
    })();
  },[])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        {text}
        <Input id="sampleText" text="這是一個input" value={text} onChangeHandler={onChangeHandler}></Input>
        <button type="button" className="btn btn-primary">Primary</button>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
