
import styles from "./style.module.css"

import Logo from "../../../assets/img/svg/Black.svg"
import Super from "../../../assets/img/svg/super.png"

export default function  Testimonial () {
  return (
    <div className={styles.containerTesti}>
      <img className={styles.logo} src={Logo} alt="" />
      <div className={styles.containerText}>
        <h2 className={styles.texto}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, 
        eros dolor interdum nulla, ut commodo diam libero vitae erat."</h2>
      </div>

      <div className={styles.containerFooter}>
        <img className={styles.icone} src={Super} alt="" />
        <h1 className={styles.nome}>Name Surname</h1>
        <p className={styles.posicanp m,o}>Position, Company name</p>

      </div>
    </div>
  )
}