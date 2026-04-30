import ally from "../../assets/Allison_Ly.png"
import user from "../../assets/user.png"
import email from "../../assets/mail.png"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import insta from "../../assets/instagram.png"
import styles from "./aboutme.module.css"

function AboutMe() {
   return (
      <div className={styles.abtme_section}>
         <img className={styles.pic} src={ally} alt="picture of Allison Ly" loading="lazy" />
         <h2>Allison Y. Ly</h2>
         <h3>Digital Engineering Tech Consultant at EY</h3>
         <p>Seattle, WA</p>
         <div className={styles.socials}>
            <a href="https://docs.google.com/document/d/1sOQ6vM8wcC0NNTz2ZSJfEKxyDb9MASPyLu3Si5iHMpg/edit?usp=sharing" target="_blank">
               <img className={styles.socials_img} src={user} alt="user icon for resume" width="30px" height="30px" loading="lazy" />
            </a>
            <a href="mailto: allison.y.ly@gmail.com">
               <img className={styles.socials_img} src={email} alt="email icon" width="30px" height="30px" loading="lazy" />
            </a>
            <a href="https://www.linkedin.com/in/allison-y-ly/" target="_blank">
               <img className={styles.socials_img} src={linkedin} alt="linkedin icon" width="30px" height="30px" loading="lazy" />
            </a>
            <a href="https://github.com/ayly8" target="_blank">
               <img className={styles.socials_img} src={github} alt="github icon" width="30px" height="30px" loading="lazy" />
            </a>
            <a href="https://www.instagram.com/lylychee_arts?igsh=a3V6cDZ4NXFjaDJ0" target="_blank">
               <img className={styles.socials_img} src={insta} alt="instagram icon" width="30px" height="30px" loading="lazy" />
            </a>
         </div>
         <hr></hr>
         <p>
            Hi, my name is Allison and welcome to my portfolio website! I am a Computer Science major who graduated from Cal Poly Pomona
            in December 2024 and currently work at EY as a tech consultant. I have a background in teaching STEAM concepts, working in
            collaborative settings, and I am passionate about applying these skills in a professional tech environment. I enjoy spending 
            time with loved ones, doing art, and playing games in my free time!
         </p>
      </div>
   );
}

export default AboutMe