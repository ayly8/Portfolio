import Description from "../components/Desc"
import SeeMore from "../components/SeeMore"
import '../css/home.css'
import ally from '../assets/Allison_Ly.png'

function Home() {
   const openInNewTab = (url) => () => {
      window.open(url, '_blank', 'noopener,noreferrer');
   };

   return (
      <>
         <div id="everything-home">
            <h1 className="section-title">₊⋆ ☾⋆⁺₊⋆ About Me ⋆⁺₊⋆ ☾⋆⁺</h1>
            <div id="about-me">
               <div id="pic-and-desc">
                  <img id="about-me-pic" src={ally} alt="picture of Allison Ly" loading="lazy"/>
                  <p id="about-me-para">
                     Hi my name is Allison Ly, and welcome to my portfolio website!
                     {/* Hi, my name is Allison Ly and welcome to my portfolio website! I am a Computer Science
                     major at Cal Poly Pomona and will be graduating in December 2024. In my free time, I enjoy drawing, 
                     reading, watching anime, and playing games like Animal Crossing and Overcooked. I am interested in 
                     pursuing a career in Frontend Development, UI/UX Design, Project Management, and Software Engineering. 
                     I have maintained a GPA of 3.67 and made the Dean’s Honors List every semester. For almost three years 
                     I have been an active member of sheCodes, a club that supports underrepresented students in STEM. I also 
                     participated in the Summer 2023 Unmanned Aerial Vehicle Research Experience for Undergrads, where I 
                     gained interdisciplinary experience. */}
                  </p>
               </div>
               <div id="connect">
                  <div 
                     className="connect-options" 
                     onClick={openInNewTab('https://docs.google.com/document/d/1sOQ6vM8wcC0NNTz2ZSJfEKxyDb9MASPyLu3Si5iHMpg/edit?usp=sharing')}>
                     <h3>Resume</h3>
                  </div>
                  <div 
                     className="connect-options"
                     onClick={() => {window.location.href = 'mailto:allison@example.com';}}>
                     <h3>Email</h3>
                  </div>
                  <div 
                     className="connect-options"
                     onClick={openInNewTab('https://www.linkedin.com/in/allison-y-ly/')}>
                     <h3>Linkedin</h3>
                  </div>
                  <div
                     className="connect-options"
                     onClick={openInNewTab('https://github.com/ayly8')}>
                     <h3>Github</h3>
                  </div>
               </div>
            </div>
            <div id="work-exp">
               <h1 className="section-title">: *✧･ﾟ:* Work Experience *:･ﾟ✧*:</h1>
               <Description 
                  title="Research Experience for Undergrads (REU)"
                  duration="June - August 2023"
                  desc=""/>
               <Description 
                  title="Aims Academy"
                  duration="July - December 2022"
                  desc=""/>
            </div>
            <div id="extra-exp">
               <h1 className="section-title">⋆ ˚｡⋆୨୧˚ Extracurricular ˚୨୧⋆｡˚ ⋆</h1>
               <Description 
                  title="Cal Poly Pomona sheCodes Internal Vice President"
                  duration="May 2023 - May 2024"
                  desc=""/>
               <Description 
                  title="Cal Poly Pomona sheCodes Social Chair"
                  duration="May 2023 - May 2024"
                  desc=""/>
            </div>
            <SeeMore 
               first_location="/work"
               first_option_name="Work"
               second_location="/fun"
               second_option_name="Fun"/>
            <br></br>
         </div>
      </> 
   );
}

export default Home