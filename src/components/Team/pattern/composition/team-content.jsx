import "../../styles.css"
import {Link, Nav, Super, X} from "../../assets/images/svg"

export default function Content () {
  return (
    <div className="team-container">
      <img src={Super} alt="" />
      <div className="text-team">
        <h1>Full name</h1>
        <h2>Job title</h2>
      </div>
      <div className="text-descrição">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique.</p>
      </div>
      <div className="icons-team">
        <a href="" target="_blank">
        <img src={Link} alt="-bla" />
        </a>
        <a href="">
        <img src={Nav} alt="" />
        </a>
        <a href="">
        <img src={X} alt="" />
        </a>
        
      </div>
    </div>
  )

}