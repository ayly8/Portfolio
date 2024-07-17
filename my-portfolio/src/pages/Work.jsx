import Project from "../components/Project"
import SeeMore from "../components/SeeMore"
import '../css/work.css'

function Work() {
   const navigateTo = (path) => () => {
      window.location.href = path;
   };

   return (
      <>
         <div id="everything">
            <div className="proj-section">
               <Project 
                  img=""
                  imgdesc=""
                  title="Restaurant Delivery System"
                  briefdesc="Java Desktop Application"
                  role="Frontend Developer"
                  fulldesc=""
               />
               <Project 
                  img=""
                  imgdesc=""
                  title="Planning Pal"
                  briefdesc="Fullstack Web Application"
                  role="Fullstack Developer"
                  fulldesc=""
               />
            </div>
            <div className="proj-section">
               <Project 
                  img=""
                  imgdesc=""
                  title="NomNomMap"
                  briefdesc="Android Mobile Application"
                  role="Frontend Developer"
                  fulldesc=""
               />
               <Project 
                  img=""
                  imgdesc=""
                  title="ChatGPT Senior Project"
                  briefdesc="Data Analysis"
                  role="Researcher"
                  fulldesc=""
               />
            </div>
            <div className="proj-section">
               <Project 
                  img=""
                  imgdesc=""
                  title="Slime Hop"
                  briefdesc="2D Godot Puzzle Platform Game"
                  role="UI/UX Designer"
                  fulldesc=""
               />
               <Project 
                  img=""
                  imgdesc=""
                  title="Pokemon Companions"
                  briefdesc="Java Desktop Application"
                  role="Developer"
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