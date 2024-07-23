import Project from "../components/Project"
import SeeMore from "../components/SeeMore"
import '../css/work.css'

function Work() {
   return (
      <>
         <div id="everything-work">
            <h1 className="section-title">.｡*ﾟ+.*. Projects +..｡*ﾟ+</h1>
            <div className="proj-section">
               <Project 
                  title="Portfolio Website"
                  img=""
                  imgDesc=""
                  briefDesc="Fullstack Web Application"
                  link=""
                  linkName="Github"
                  fullDesc="test"
               />
               <Project 
                  title="Restaurant Delivery System"
                  img=""
                  imgdesc=""
                  briefDesc="Java Desktop Application"
                  link=""
                  linkName="Github"
                  fullDesc=""
               />
            </div>
            <div className="proj-section">
               <Project 
                  title="Planning Pal"
                  img=""
                  imgDesc=""
                  briefDesc="Fullstack Web Application"
                  link=""
                  linkName="Github"
                  fullDesc=""
               />
               <Project 
                  title="NomNomMap"
                  img=""
                  imgDesc=""
                  briefDesc="Android Mobile Application"
                  link=""
                  linkName="Github"
                  fullDesc=""
               />
            </div>
            <div className="proj-section">
               <Project 
                  title="ChatGPT Senior Project"
                  img=""
                  imgDesc=""
                  briefDesc="Data Analysis"
                  link=""
                  linkName="Github"
                  fullDesc=""
               />
               <Project 
                  title="Slime Hop"
                  img=""
                  imgDesc=""
                  briefDesc="2D Godot Puzzle Platform Game"
                  link=""
                  linkName="Github"
                  fullDesc=""
               />
            </div>
            <h1 className="section-title">⋆⁺₊⋆₊⁺ Hackathons ⋆⁺₊⋆₊⁺</h1>
            <div className="proj-section">
               <Project 
                  title="Nutriversity"
                  img=""
                  imgDesc=""
                  briefDesc="Wafflehacks 2023 - Web Application"
                  link=""
                  linkName="Devpost"
                  fullDesc=""
               />
               <Project 
                  title="AnimEats"
                  img=""
                  imgDesc=""
                  briefDesc="AthenaHacks 2023 - Web Application"
                  link=""
                  linkName="Devpost"
                  fullDesc=""
               />
            </div>
            <SeeMore 
               first_location="/"
               first_option_name="Home"
               second_location="/fun"
               second_option_name="Fun"/>
            <br></br>
         </div>
      </>
   );
}

export default Work