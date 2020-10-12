import React from "react"

const Navbar = () => {
  return (
    <div id="nav" className="d-flex justify-content-center align-items-center">
      <ul className="d-flex flex-row justify-content-around align-items-center">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
