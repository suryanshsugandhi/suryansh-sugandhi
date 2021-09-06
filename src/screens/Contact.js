import React from "react"

const Contact = () => {
  return (
    <div className="container mt-4 text-left" id="contact">
      <h4>Let us work together</h4>
      <div className="row">
        <div className="col-12 col-md-7 text-left text-secondary">
          Feel free to reach out if you are looking for a developer, have a question,
          or just want to connect.
          <br />
        </div>
      </div>
      <div className="my-4">
        <a
          href="mailto:contact@suryansh.dev"
          rel="noreferrer"
          className="external-link"
          target="_blank"
        >
          {" "}
          contact@suryansh.dev{" "}
        </a>
      </div>

      <div className="row">
        <div className="col-4">
          <img
            src="./profile.png"
            alt=""
            height="100vh"
            className="profile-picture"
          />
        </div>
        <div className="col-8 text-right d-flex justify-content-end align-items-end">
          <a
            href="http://github.com/suryanshsugandhi"
            className="mx-2 text-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="http://linkedin.com/in/suryanshsugandhi"
            className="mx-2 text-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://drive.google.com/file/d/1Mw5992cJNM4jfFgNJtLjo4jqbWU9AASZ/view?usp=sharing"
            className="mx-2 text-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV Resumé
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
