import React from "react"
import Preview from "../components/ProjectPreview/Preview"
import Section from "../components/Section"
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
          rel="noreferrer"
          className="external-link"
        >
          View more of my work on GitHub &#8594;
        </a>
      </p>
    </Section>
  )
}
