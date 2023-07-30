import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Component/Clock'
import ClockList from './Component/ClockList'
import Form from './Component/Form'

function App({ locale }) {
  const [count, setCount] = useState(0)
  const quantities = [1, 2, 3];
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h2>Hey, It's my first react project</h2>
      <Clock>Time</Clock >
      <ClockList quantities={quantities}></ClockList>
      <Form></Form>
    </>
  )
}

export default App;
