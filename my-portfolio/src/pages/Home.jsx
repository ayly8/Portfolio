import Description from "../components/Desc"
import '../css/home.css'

function Home() {
   return (
      <>
         <div id="everything">
            <div id="about-me">
               <h1 className="section-title">₊⋆ ☾⋆⁺₊⋆ About Me ⋆⁺₊⋆ ☾⋆⁺</h1>
               <div id="pic-and-desc">
                  <img id="about-me-pic" src="./src/assets/Allison_Ly.JPG" alt="picture of Allison Ly" width="300px" height="400px"></img>
                  <div>
                     <p id="about-me-para">Hi, my name is Allison Ly and welcome to my portfolio website!</p>
                     <button id="resume-btn">Resume</button>
                  </div>
               </div>
            </div>
            <div id="work-exp">
               <h1 className="section-title">✧･ﾟ: *✧･ﾟ:* Work Experiences *:･ﾟ✧*:･ﾟ✧</h1>
               <Description 
                  title="Research Experience for Undergrads (REU)"
                  duration="June - August 2023"
                  desc="test"/>
               <Description 
                  title="Aims Academy"
                  duration="July - December 2022"/>
            </div>
            <div id="extra-exp">
               <h1 className="section-title">⋆ ˚｡⋆୨୧˚ Extracurricular ˚୨୧⋆｡˚ ⋆</h1>
               <Description 
                  title="Cal Poly Pomona sheCodes Internal Vice President"
                  duration="May 2023 - May 2024"/>
               <Description 
                  title="Cal Poly Pomona sheCodes Social Chair"
                  duration="May 2023 - May 2024"/>
            </div>
         </div>
      </> 
   );
}

export default Home