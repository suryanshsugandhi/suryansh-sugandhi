import React from "react"
import "./styles.css"

export default ({ project, reverse }) => {
  const { title, description, github, live, tags, thumbnail } = project
  return (
    <div className="row project-container">
      <div
        className={`project-content col-12 col-md-5 order-1 ${
          reverse && "order-md-12"
        }`}
      >
        {tags.map((tag) => (
          <span className="badge badge-secondary m-0 mx-1">{tag}</span>
        ))}
        <h4 className="title">{title}</h4>
        <p>{description}</p>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="github-btn mx-2 px-2 py-1"
        >
          <i className="fab fa-github pr-1" />
          Github
        </a>
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="live-btn mx-2 px-2 py-1"
        >
          <i className="fas fa-laptop-code pr-1" />
          Demo
        </a>
      </div>
      <div
        className={`project-thumbnail col-12 col-md-7 order-12 ${
          reverse && "order-md-1"
        }`}
      >
        <img src={thumbnail} alt={title} />
      </div>
    </div>
  )
}
