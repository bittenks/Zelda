import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar';
import { Header } from './Components/Header/Header';
import './assets/Fonts/HyliaSerif.ttf';
import { Games } from './Components/Games/Games';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='Header'>
    <Header/>
      </div>
      <Games/>
    </>
  )
}

export default App
