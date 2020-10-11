import React from "react"
import Section from "../components/Section"
import bg from "./bg-1.svg"

export default () => {
  return (
    <Section background={bg} id="home">
      <h1 className="title" style={{ fontWeight: 800 }}>
        Hi, I am Suryansh Sugandhi
      </h1>
      <h2 className="subtitle" style={{ fontWeight: 800 }}>
        I am a full stack developer{" "}
        <span role="img" aria-label="developer">
          💻
        </span>
      </h2>
      <a href="#about">
        Know more about me
        <i className="fas fa-chevron-down animated bounce infinite slower delay-2s" />
      </a>
    </Section>
  )
}
