import "../../styles.js/index.js"

import Image from "../../assets/svg/Image.svg"

export default function Content () {
  return (
    <div className="galeria-image">
      <img src= {Image} alt="" />
      <img src= {Image} alt="" />
      <img src= {Image} alt="" />
    </div>
  )
}