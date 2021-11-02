import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import logo from './logo.svg'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import Aside from './Aside'

function App() {
  const [count, setCount] = useState(0)
  const [isSideDisplayed, setIsSideDisplayed] = useState(true)

  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Body />
        <Aside />
        <Footer />
      </Router>
    </div>
  )
}

export default App
