import Description from "../components/Desc"

function Home() {
   return (
      <>
         <div id="introduction">
            <h1>Introduction</h1>
            <div id=""></div>
         </div>
         <div id="work-exp">
            <h1>Work Experiences</h1>
            <Description 
               title="National Science Foundation (NSF) Research Experience for Undergrads (REU)"
               duration="June - August 2023"/>
            <Description 
               title="Aims Academy"
               duration="July - December 2022"/>
         </div>
         <div id="extra-exp">
            <h1>Extracurricular Experiences</h1>
            <Description 
               title="Cal Poly Pomona sheCodes Internal Vice President"
               duration="2023-2024"/>
            <Description 
               title="Cal Poly Pomona sheCodes Social Chair"
               duration="2023-2024"/>
         </div>
      </> 
   );
}

export default Home