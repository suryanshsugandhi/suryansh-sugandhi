import React from "react"
import Preview from "../components/ProjectPreview/Preview"
import Section from "../components/Section"
import bg from "./bg-3.svg"
import { PROJECTS } from "../Constants/projects"

export default () => {
  return (
    <Section id="projects">
      <h2 className="title text-center">Project Showcase</h2>
      {PROJECTS.map((item, index) => (
        <Preview project={item} reverse={index % 2 === 0} />
      ))}
      <p className="text-right reveal-row">
        <a
          href="https://github.com/suryanshsugandhi"
          target="_blank"
          className="external-link"
        >
          View more of my work
        </a>
      </p>
    </Section>
  )
}
