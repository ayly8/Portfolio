import React from 'react';
import { Link } from 'react-router-dom';
import Description from "../components/Desc"
import SeeMore from "../components/SeeMore"
import '../css/home.css'
import ally from '../assets/Allison_Ly.png'
import proj1 from "../assets/project_ss/cowcomic_ss.png"
import proj2 from "../assets/project_ss/restaurant_ss.png"
import proj3 from "../assets/project_ss/nomnommap_ss.png"

// creates the home page
function Home() {

   return (
      <>
         <div id="everything-home">
            <p className="section-title">ꔫ: About Me :ꔫ</p>
            <div id="about-me">
               <div id="pic-and-desc">
                  <img id="about-me-pic" src={ally} alt="picture of Allison Ly" loading="lazy"/>
                  <p id="about-me-para">
                  Hi, my name is Allison Ly and welcome to my portfolio website! I am a Computer Science major who graduated from Cal Poly Pomona
                  in December 2024. I am interested in a career within the Project Management, Technical Consulting, and Software Engineering fields. 
                  I have maintained a GPA of 3.67 and made the Dean’s Honors List every semester. For almost three years I have been an active member of 
                  Cal Poly Pomona’s sheCodes club, which supports underrepresented students in STEM. I also participated in the Summer 2023 Unmanned 
                  Aerial Vehicle Research Experience for Undergrads at Cal Poly Pomona, where I gained interdisciplinary experience.
                  </p>
               </div>
               <div id="connect">
                  <a href="https://docs.google.com/document/d/1sOQ6vM8wcC0NNTz2ZSJfEKxyDb9MASPyLu3Si5iHMpg/edit?usp=sharing" className="connect-options" target='_blank'>
                     <h3>Resume</h3>
                  </a>
                  <a href="mailto:allison.y.ly@gmail.com" className="connect-options" target='_blank'>
                     <h3>Email</h3>
                  </a>
                  <a href="https://www.linkedin.com/in/allison-y-ly/" className="connect-options" target='_blank'>
                     <h3>Linkedin</h3>
                  </a>
                  <a href="https://github.com/ayly8" className="connect-options" target='_blank'>
                     <h3>Github</h3>
                  </a>
               </div>
            </div>
            <p className="section-title">.｡* Featured Projects *｡.</p>
            <div id="featured-work">
               <div className="works">
                  <img id="proj1" src={proj1} alt="cowcomic book survey page" loading="lazy"/>
                  <h3>CowComic</h3>
                  <h4>React Web Application</h4>
               </div>
               <div className="works">
                  <img id="proj2" src={proj2} alt="restaurant info page" loading="lazy"/>
                  <h3>Restaurant Delivery System</h3>
                  <h4>Java Desktop Application</h4>
               </div>
               <div className="works">
                  <img id="proj3" src={proj3} alt="nomnommap app screenshots" loading="lazy"/>
                  <h3>NomNomMap</h3>
                  <h4>Android Mobile Application</h4>
               </div>
            </div>
            <div id="work-exp">
               <p className="section-title">･✧･ Work Experience ･✧･</p>
               <Description
                  title="Dreams for Schools"
                  duration="March - August 2025"
                  desc="Worked as a K-5th grade STEAM instructor at Dreams for Schools, located in Orange County CA, for half a year. Co-instructed 20 students 
                  during Spring-Summer to introduce STEAM concepts and foster a hands-on learning environment. Taught block coding to students in various learning stages 
                  using Sphero Robots and Sphero EDU software. Introduced engineering concepts to students using project kits and art supplies." />
               <Description 
                  title="Research Experience for Undergrads"
                  duration="June - August 2023"
                  desc="Selected as one of 12 participants from over 100 applicants in a National Science Foundation (NSF) funded Research Experience 
                  for Undergrads (REU) at Cal Poly Pomona as an Unmanned Aerial Vehicle (UAV) research assistant.. Configured two Digi XBee radio communication 
                  devices to interact with each other in order for the UAV to send GPS coordinates the ground control station (GCS). Utilized NASA's Worldwide 
                  Wind Java API to ensure the GCS received and displayed the correct GPS coordinates. Implemented a graphical user interface using Java Swing to 
                  enhance UAV flight log data visualization onto the GCS."/>
               <Description 
                  title="Aims Academy"
                  duration="July - December 2022"
                  desc="Worked as a teacher at Aims Academy, located in Walnut CA, for half a year. Managed 10 students in a combination class of 2nd-3rd 
                  graders during the Summer, and managed 15 students in a combination class of K-1st graders during the semester. Taught Math and English 
                  to students in various learning stages using common core methods, and provided homework assistance. Tutored Pre-Algebra and Algebra 1 weekly 
                  during the semester."/>
            </div>
            <div id="extra-exp">
               <p className="section-title">˚୨୧ Extracurricular ୨୧˚</p>
               <Description 
                  title="Cal Poly Pomona sheCodes Internal Vice President"
                  duration="May 2023 - May 2024"
                  desc="Planned and organized the Semester Long Project (SLP) 2023 Program to offer underrepresented students team project opportunities 
                  that allow them to explore CS topics outside of class. Oversaw the development of 8 SLP teams during the 9-week program and facilitated SLP Demo Day. 
                  Directed and hosted the Future Women Developer's (FWD) 2024 Conference, introducing 25 middle/high school female and minority students to various CS topics. 
                  Provided students with 3 hands-on workshops about Web Development, Python, and Cybersecurity, as well as a Minority in Tech panel."/>
               <Description 
                  title="Cal Poly Pomona sheCodes Social Chair"
                  duration="May 2023 - May 2024"
                  desc="Planned and hosted monthly socials, executive board retreats, and End of the Year banquet for over 50 members. Each social event aimed to foster an 
                  inclusive and supportive environment for women and minorities in STEM. Executive board retreats focused on building teamwork skills for the school year. Banquet 
                  celebrated the accomplishments and achievements of sheCodes throughout the year."/>
            </div>
            <SeeMore 
               first_location="/projects"
               first_option_name="Projects"
               second_location="/fun"
               second_option_name="Fun"/>
            <br></br>
         </div>
      </> 
   );
}

export default Home