function Footer() {
   return (
      <footer id="foot">
         <div id="socials">
            <a href="https://docs.google.com/document/d/1sOQ6vM8wcC0NNTz2ZSJfEKxyDb9MASPyLu3Si5iHMpg/edit?usp=sharing" target="_blank">
               <img
                  className="socials-img"
                  src="./src/assets/user.png"
                  alt="resume icon"
                  width="30px"
                  height="30px"
                  loading="lazy">
               </img>
            </a>
            <a href="mailto: allison.y.ly@gmail.com">
               <img
                  className="socials-img"
                  src="./src/assets/mail.png"
                  alt="email icon"
                  width="30px"
                  height="30px"
                  loading="lazy">
               </img>
            </a>
            <a href="https://www.linkedin.com/in/allison-y-ly/" target="_blank">
               <img
                  className="socials-img"
                  src="./src/assets/linkedin.png"
                  alt="linkedin icon"
                  width="30px"
                  height="30px"
                  loading="lazy">
               </img>
            </a>
            <a href="https://github.com/ayly8" target="_blank">
               <img
                  className="socials-img"
                  src="./src/assets/github.png"
                  alt="github icon"
                  width="30px"
                  height="30px"
                  loading="lazy"> 
               </img>
            </a>
         </div>
      </footer>
   );
}

export default Footer