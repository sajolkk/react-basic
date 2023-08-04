import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Component/Clock'
import ClockList from './Component/ClockList'
import Form from './Component/Form'
import TemparatureCalculator from './Component/TemparatureCalculator'
import TextInhe from './Component/TextInhe'

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

      {/* temparature calculator */}
      <TemparatureCalculator />

      <h1>Inheritance</h1>
      <TextInhe />

      <br />
      <h1>Composition</h1>
    </>
  )
}

export default App;
