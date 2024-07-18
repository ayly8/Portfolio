import Project from "../components/Project"
import SeeMore from "../components/SeeMore"
import '../css/work.css'

function Work() {
   return (
      <>
         <div id="everything">
            <div className="proj-section">
               <Project 
                  title="Portfolio Website"
                  img=""
                  imgdesc=""
                  briefdesc="Fullstack Web Application"
                  githublink=""
                  fulldesc=""
               />
               <Project 
                  title="Restaurant Delivery System"
                  img=""
                  imgdesc=""
                  briefdesc="Java Desktop Application"
                  githublink=""
                  fulldesc=""
               />
            </div>
            <div className="proj-section">
               <Project 
                  title="Planning Pal"
                  img=""
                  imgdesc=""
                  briefdesc="Fullstack Web Application"
                  githublink=""
                  fulldesc=""
               />
               <Project 
                  title="NomNomMap"
                  img=""
                  imgdesc=""
                  briefdesc="Android Mobile Application"
                  githublink=""
                  fulldesc=""
               />
            </div>
            <div className="proj-section">
               <Project 
                  title="ChatGPT Senior Project"
                  img=""
                  imgdesc=""
                  briefdesc="Data Analysis"
                  githublink=""
                  fulldesc=""
               />
               <Project 
                  title="Slime Hop"
                  img=""
                  imgdesc=""
                  briefdesc="2D Godot Puzzle Platform Game"
                  githublink=""
                  fulldesc=""
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