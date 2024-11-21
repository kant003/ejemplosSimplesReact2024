import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Ejem1 from './pages/Ejem1'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="Ejem1" element={<Ejem1 />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
