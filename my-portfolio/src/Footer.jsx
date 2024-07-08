function Footer() {
   return (
      <footer id="foot">
         <div id="socials">
            <div className="socials-item">
               <a href="mailto: allison.y.ly@gmail.com">
                  <img className="socials-img" src="./src/assets/mail.png" alt="email icon" width="30px" height="30px"></img>
               </a>
               <p>allison.y.ly@gmail.com</p>
            </div>
            <div className="socials-item">
               <a href="https://www.linkedin.com/in/allison-y-ly/" target="_blank">
                  <img className="socials-img" src="./src/assets/linkedin.png" alt="linkedin icon" width="30px" height="30px"></img>
               </a>
               <p>allison-y-ly</p>
            </div>
            <div className="socials-item">
               <a href="https://github.com/ayly8" target="_blank">
                  <img className="socials-img" src="./src/assets/github.png" alt="github icon" width="30px" height="30px"></img>
               </a>
               <p>ayly8</p>
            </div>
         </div>
      </footer>
   );
}

export default Footer