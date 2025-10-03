import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/about'
import Service from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<MovieDetails />} />
        {/* ...other routes... */}
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
