import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Home/NavBar'
import Home from './Home/Home'
import Game from './Games/Game'
import About from './Components/About/About'
import Details from './Components/Details/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="flex">
        <NavBar />
        <div className="ml-20 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Details />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
