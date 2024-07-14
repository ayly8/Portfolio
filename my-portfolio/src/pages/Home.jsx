import Description from "../components/Desc"
import SeeMore from "../components/SeeMore"
import '../css/home.css'

function Home() {
   const navigateTo = (path) => () => {
      window.location.href = path;
   };

   return (
      <>
         <div id="everything">
            <h1 className="section-title">₊⋆ ☾⋆⁺₊⋆ About Me ⋆⁺₊⋆ ☾⋆⁺</h1>
            <div id="about-me">
               <div id="pic-and-desc">
                  <img 
                     id="about-me-pic"
                     src="./src/assets/Allison_Ly.JPG"
                     alt="picture of Allison Ly"
                     width="300px"
                     height="400px"
                     loading="lazy">
                  </img>
                  <p id="about-me-para">
                     
                  </p>
                  <button id="resume-btn">Resume</button>
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
               first_location={navigateTo('/work')}
               first_option_name="Work"
               second_location={navigateTo('/fun')}
               second_option_name="Fun"/>
            <br></br>
         </div>
      </> 
   );
}

export default Home