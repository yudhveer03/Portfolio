import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {


  return (
    <>
      <Nav />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        

      </Routes>

      <Footer/>
    </>
  )
}

export default App
