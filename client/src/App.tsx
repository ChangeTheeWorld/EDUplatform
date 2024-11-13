import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Opensource from './pages/Opensource';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opensource" element={<Opensource />} />
      </Routes>
    </Router>
  )
}

export default App
