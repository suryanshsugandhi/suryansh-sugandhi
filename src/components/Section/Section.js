import React from "react"

export default ({ children, background, id }) => {
  const sectionStyles = {
    backgroundImage: `url(${background})`,
  }
  return (
    <div id={id} className="section" style={sectionStyles}>
      <div className="container">{children}</div>
    </div>
  )
}
