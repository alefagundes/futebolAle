import './App.css'

//Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//componenets
import Navbar from './components/Navabr'
import Home from './pages/Home'
import TimeDetail from './pages/TimeDetail'

function App() {
  const url = import.meta.env.VITE_URL
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/fases" element={<h2>Teste1</h2>} />
          <Route path="/teste2" element={<h2>Teste2</h2>} />
          <Route path="/" element={<Home />} />
          <Route path="/teste3" element={<h2>Teste3</h2>} />
          <Route path={`${url}/times/:id`} element={<TimeDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
