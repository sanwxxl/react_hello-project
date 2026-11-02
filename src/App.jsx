import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name= "김산울";
  return (
   <div>
    <h1>Hello World!!</h1>
    <p>안녕하세요~ {name}</p>
   </div>
    
  )
}

export default App
