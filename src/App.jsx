import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navabar/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Footer from './components/Home/Footer'
<<<<<<< HEAD
=======
import Contact from './pages/Contact'
>>>>>>> f95598c (Some Changes in the website)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<<<<<<< HEAD
    <Navbar />
=======
    <Navbar  />
>>>>>>> f95598c (Some Changes in the website)
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
<<<<<<< HEAD
      {/* <Route path="/contact" element={<Contact />} />
      <Route path="/export-info" element={<ExportInfo />} /> */}
=======
      <Route path="/contact" element={<Contact />} />
>>>>>>> f95598c (Some Changes in the website)
    </Routes>
    <Footer />

    </div>
  
 
  )
}

export default App
