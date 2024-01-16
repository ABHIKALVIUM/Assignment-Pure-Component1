import { useState } from 'react'
import './App.css'
import SimpleComponent from './components/SimpleCounterComponent'
import PureCounterComponent from './components/PureCounterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SimpleComponent></SimpleComponent>
    <PureCounterComponent></PureCounterComponent>
    </>
  )
}

export default App