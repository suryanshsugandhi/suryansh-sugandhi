import React from "react"
// import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Header/Navbar"
import About from "./screens/About"
import Contact from "./screens/Contact"
import Home from "./screens/Home"
import Projects from "./screens/Projects"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
