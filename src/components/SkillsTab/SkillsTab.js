import React from "react"
import "./styles.css"
import { SKILLS } from "../../Constants/projects"

const Icon = ({ src, title }) => {
  return (
    <div className="item d-flex justify-content-center align-items-center flex-column">
      <img src={src} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default () => {
  return (
    <div className="tab-container">
      <h3 className="subtitle">Tech Stack</h3>
      <div className="row">
        {SKILLS.map((item) => (
          <div className="col-6 col-md-4">
            <Icon src={item.src} title={item.title} />
          </div>
        ))}
      </div>
    </div>
  )
}
