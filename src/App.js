import React from "react"
// import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Header/Navbar"
import About from "./screens/About"
import Home from "./screens/Home"
import Projects from "./screens/Projects"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
    // <BrowserRouter>
    //   <Navbar />
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/about" exact component={About} />
    //   </Switch>
    // </BrowserRouter>
  )
}

export default App
