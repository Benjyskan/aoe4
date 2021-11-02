import { useState } from 'react'
import { BrowserRouter as Router, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import logo from './logo.svg'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import Aside from './Aside'

function App() {

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
