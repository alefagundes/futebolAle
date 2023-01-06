import './App.css'

//Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//componenets
import Navbar from './components/Navabr'
import Home from './pages/Home'
import TimeDetail from './pages/TimeDetail'
import Fases from './pages/Fases'
import Campeonato from './pages/Campeonato'

function App() {
  const url = import.meta.env.VITE_URL
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/confrontos" element={<Fases url={url} />} />
          <Route path="/campeonato" element={<Campeonato url={url} />} />
          <Route path="/" element={<Home />} />
          <Route path={'times/:id'} element={<TimeDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
