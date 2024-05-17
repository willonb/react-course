import "./styles.css";

import Seta from "../../assets/images/svg/Chevron Right.svg"
import Image from "../../assets/images/svg/Image.svg"

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout-content">
        <div className="layout-description">
        <div className="layout-text">
          <h4>Tagline</h4>
          <h1>Medium length section heading goes here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius <br /> enim in eros elementum tristique. Duis t commodo diam libero vitae erat.</p>
        </div>
        <div className="layout-botton">
          <button className="button-box">Button</button>
          <button className="button-link">
            <p>button</p>
            <img src={Seta} alt="" />
          </button>
          </div>
        </div>

        <img src={Image} alt="" />

      </div>

    </div>
  
  )
}
