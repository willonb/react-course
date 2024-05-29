import "../../styles.css"
import {Link, Nav, Super, X} from "../../assets/images/svg"

export default function Content (props) {
  return (
    <div className="team-container">
      <img src={Super} alt="" />
      <div className="text-team">
        <h1>{props.name}</h1>
        <h2>{props.role}</h2>
      </div>
      <p className="text-descrição">
        {props.description}
      </p> 
      
      <div className="icons-team">
        <a href={props.link} target="_blank">
        <img src={Link} alt="-bla" />
        </a>
        <a href={props.nav}>
        <img src={Nav} alt="" />
        </a>
        <a href={props.x}>
        <img src={X} alt="" />
        </a>
        
      </div>
    </div>
  )

}