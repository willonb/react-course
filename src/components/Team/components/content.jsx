import "../styles.css"

import Link from "../../Team/assets/images/svg/link.svg"
import Nav from "../../Team/assets/images/svg/nav.svg"
import X from "../../Team/assets/images/svg/x.svg"
import Super from "../../Team/assets/images/svg/super.svg"


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