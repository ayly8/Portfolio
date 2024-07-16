import user from '../assets/user.png'
import email from '../assets/mail.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

function Footer() {
   return (
      <footer id="foot">
         <div id="socials">
            <a href="https://docs.google.com/document/d/1sOQ6vM8wcC0NNTz2ZSJfEKxyDb9MASPyLu3Si5iHMpg/edit?usp=sharing" target="_blank">
               <img
                  className="socials-img"
                  src={user}
                  alt="user icon for resume"
                  width="30px"
                  height="30px"
                  loading="lazy"/>
            </a>
            <a href="mailto: allison.y.ly@gmail.com">
               <img
                  className="socials-img"
                  src={email}
                  alt="email icon"
                  width="30px"
                  height="30px"
                  loading="lazy"/>
            </a>
            <a href="https://www.linkedin.com/in/allison-y-ly/" target="_blank">
               <img
                  className="socials-img"
                  src={linkedin}
                  alt="linkedin icon"
                  width="30px"
                  height="30px"
                  loading="lazy"/>
            </a>
            <a href="https://github.com/ayly8" target="_blank">
               <img
                  className="socials-img"
                  src={github}
                  alt="github icon"
                  width="30px"
                  height="30px"
                  loading="lazy"/> 
            </a>
         </div>
      </footer>
   );
}

export default Footer