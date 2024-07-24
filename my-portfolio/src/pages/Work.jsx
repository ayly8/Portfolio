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
                  briefDesc="React Web Application"
                  link="https://github.com/ayly8/Portfolio"
                  linkName="Github"
                  fullDesc="Designed and implemented a portfolio website to showcase all of my experiences, projects, and artwork. 
                  Utilized React to facilitate building a component based website. Used Figma to create prototype designs of the website. 
                  Deployed the website through GitHub Pages."
               />
               <Project 
                  title="Restaurant Delivery System"
                  briefDesc="Java Desktop Application"
                  link="https://github.com/CS3560-02-07/Restaurant-Delivery-System"
                  linkName="Github"
                  fullDesc="Collaborated with a team of 5 to create a Java desktop application, allowing restaurants to request orders to be 
                  delivered and drivers to pick-up those orders. Depending on the user, after logging in they would be presented with a specified 
                  user interface for restaurants or drivers. Conceptualized the graphical user interface (GUI) by using Figma and then utilized Java 
                  Swing to integrate GUI components: login, account registration, profiles for restaurant owners and delivery drivers. "
               />
            </div>
            <div className="proj-section">
               <Project 
                  title="Planning Pal"
                  briefDesc="Full Stack Web Application"
                  link="https://github.com/ayly8/Planning-Pattern"
                  linkName="Github"
                  fullDesc="Full stack web application that is designed to help users plan anything or to help them get started with planning if 
                  they are stuck. Users answer 3 questions regarding what they want to plan and those answers are used as input. Leveraged the 
                  ChatGPT API to generate a suggested plan based on the inputs. Used Flask to aid the process of retrieving user inputs for the 
                  ChatGPT API to generate the output. Constructed the website using HTML, CSS, and JavaScript."
               />
               <Project 
                  title="NomNomMap"
                  briefDesc="Android Mobile Application"
                  link="https://github.com/yuunster/NomNomMap"
                  linkName="Github"
                  fullDesc="Collaborated with a team of 3 to create an Android mobile application, utilizing the Google Maps API where users can login, 
                  store information about meals based on their location, and view their history of logged meals. Used Figma to create a prototype version 
                  of our mobile application. Enhanced user experience by implementing a bottom navigation bar and camera feature in Kotlin. Constructed the 
                  user interface for: Map, Meal Detail, Profile, and Settings, using Android Studio's Layout Editor to assemble components."
               />
            </div>
            <div className="proj-section">
               <Project 
                  title="ChatGPT Social Bias Senior Project"
                  briefDesc="Data Analysis"
                  link="https://drive.google.com/file/d/1w2c8bP2h33B-bFoUmRG3SfAeJIp45loA/view?usp=sharing"
                  linkName="Poster"
                  fullDesc="Evaluatedpotential gender and racial bias in ChatGPT. Crafted prompts on various scenarios that may produce bias based on the 
                  gender identity and ethnic background of the names provided. Conducted iterative testing with prompt variations to interpret the results, 
                  generating a dataset for future analysis. Co-authored a research poster with my team discussing our results for research symposium."
               />
               <Project 
                  title="Slime Hop"
                  briefDesc="2D Godot Puzzle Platform Game"
                  link="https://piggyfriend.itch.io/slime-hop"
                  linkName="itch.io"
                  fullDesc="Collaborated with a team of 7 to create a 2D puzzle platform game. Users play as a slime that can split into multiple copies using a 
                  Copy and Swap mechanic to traverse through various obstacles. Produced two captivating background illustrations for the menu and credits artwork 
                  using MediBang Paint illustration software. Developed the menu scene and user interface for menu buttons in Godot, strategically designed to 
                  captivate players’ interest."
               />
            </div>
            <h1 className="section-title">⋆⁺₊⋆₊⁺ Hackathons ⋆⁺₊⋆₊⁺</h1>
            <div className="proj-section">
               <Project 
                  title="Nutriversity"
                  briefDesc="Wafflehacks 2023 - Web Application"
                  link="https://devpost.com/software/nutriversity"
                  linkName="Devpost"
                  fullDesc="Collaborated in a team of 2 to create a website within 24 hours. Website allows users to log and store nutritional info 
                  onto a database for them to reference at any time. Helped develop the frontend of our website, utilizing HTML and CSS. "
               />
               <Project 
                  title="AnimEats"
                  briefDesc="AthenaHacks 2023 - Web Application"
                  link="https://devpost.com/software/animeats"
                  linkName="Devpost"
                  fullDesc="Collaborated with a team of 4 to create a website within 24 hours. Website allows users to click on an anime character 
                  to see what their favorite food recipe is and they can use the search food feature to find any food item. Helped develop the frontend 
                  of our website, utilizing HTML and CSS. "
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