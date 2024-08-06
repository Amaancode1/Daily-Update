import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExportComponent from './01. Amzon E-commerce/Components/ExportComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExportComponent />
    </>
  )
}

export default App
