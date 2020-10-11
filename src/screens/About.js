import React from "react"
import Section from "../components/Section"
import SkillsTab from "../components/SkillsTab/SkillsTab"
import bg from "./bg-4.svg"

export default () => {
  return (
    <Section id="about" background={bg}>
      <div className="row">
        <div className="col col-12 col-lg-6">
          <h2 className="title" style={{ fontWeight: 800 }}>
            Suryansh Sugandhi
          </h2>
          <h4 className="subtitle">Developer | Designer</h4>
          <p>
            I am a MERN stack web developer
            <br />
            <br />I work to design and develop robust, modular and minimalist web
            applications
            <br />I have worked on over 10 projects in various domains ranging from
            e-commerce applications and intricate proprietary solutions in web and
            android
            <br />
            <br /> I am passionate for technology and I love to write about it. I
            also sketch and draw. My love for science led me to this journey in
            computer science while the artistic kid in me was curious to explore
            designing
          </p>
        </div>
        <div className="col col-12 col-lg-6">
          <SkillsTab />
        </div>
      </div>
    </Section>
  )
}
