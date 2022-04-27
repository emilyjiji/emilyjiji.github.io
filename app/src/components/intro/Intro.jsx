import "./intro.scss"

export default function Intro() {
  return (
    <div className = "intro" id="intro">
      <div className="left">
        <div className = "imgContainer">
          <img src="assets/gatorlogo.svg" alt="gator logo"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, There, I'm </h2>
          <h1>Emily Jiji</h1>
          <h3>Computer Science Major</h3>
          <h3>University of Florida</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down arrow decor"/>
        </a>
      </div>
    </div>
  )
}
