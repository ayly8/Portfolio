import ally from "../assets/Allison_Ly.png"
import user from "../assets/user.png"
import email from "../assets/mail.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import insta from "../assets/instagram.png"

// this component creates the about me section on the left side of the web page
function AboutMe() {
   return (
      <div className="border-2 border-[#dd127f] rounded-[10px] shadow-[5px_5px_5px_#FBACBE] bg-white p-[15px] m-5 static
         md:fixed md:top-[55px] md:w-[300px] md:h-[calc(95vh-55px)]">
         <img className="w-24 h-24 rounded-full mb-2" src={ally} alt="picture of Allison Ly" loading="lazy" />
         <h2>Allison Y. Ly</h2>
         <h3>Digital Engineering Tech Consultant at EY</h3>
         <p>Seattle, WA</p>
         <hr></hr>
         <h3>Cal Poly Pomona</h3>
         <p>Computer Science | Dec 2024</p>
         <hr></hr>
         <p>
            I have a background in teaching STEAM concepts, working in collaborative settings, and I am passionate about applying
            these skills in a professional tech environment.
         </p>
         <div className="flex gap-5 mt-3">
            <a href="https://docs.google.com/document/d/1sOQ6vM8wcC0NNTz2ZSJfEKxyDb9MASPyLu3Si5iHMpg/edit?usp=sharing" target="_blank">
               <img className="[filter:invert(30%)_sepia(95%)_saturate(2000%)_hue-rotate(300deg)_brightness(90%)_contrast(85%)]
                  hover:cursor-pointer w-[30px] h-[30px]"
                  src={user} alt="user icon for resume" loading="lazy" />
            </a>
            <a href="mailto: allison.y.ly@gmail.com">
               <img className="[filter:invert(30%)_sepia(95%)_saturate(2000%)_hue-rotate(300deg)_brightness(90%)_contrast(85%)]
                  hover:cursor-pointer w-[30px] h-[30px]"
                  src={email} alt="email icon" loading="lazy" />
            </a>
            <a href="https://www.linkedin.com/in/allison-y-ly/" target="_blank">
               <img className="[filter:invert(30%)_sepia(95%)_saturate(2000%)_hue-rotate(300deg)_brightness(90%)_contrast(85%)]
                  hover:cursor-pointer w-[30px] h-[30px]"
                  src={linkedin} alt="linkedin icon" loading="lazy" />
            </a>
            <a href="https://github.com/ayly8" target="_blank">
               <img className="[filter:invert(30%)_sepia(95%)_saturate(2000%)_hue-rotate(300deg)_brightness(90%)_contrast(85%)]
                  hover:cursor-pointer w-[30px] h-[30px]"
                  src={github} alt="github icon" loading="lazy" />
            </a>
            <a href="https://www.instagram.com/lylychee_arts?igsh=a3V6cDZ4NXFjaDJ0" target="_blank">
               <img className="[filter:invert(30%)_sepia(95%)_saturate(2000%)_hue-rotate(300deg)_brightness(90%)_contrast(85%)]
                  hover:cursor-pointer w-[30px] h-[30px]"
                  src={insta} alt="instagram icon" loading="lazy" />
            </a>
         </div>
      </div>
   );
}

export default AboutMe