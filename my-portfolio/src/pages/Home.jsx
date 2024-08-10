import Description from "../components/Desc"
import SeeMore from "../components/SeeMore"
import '../css/home.css'
import ally from '../assets/Allison_Ly.png'
import slide1 from "../assets/RestaurantDeliverySystem.png"
import slide2 from "../assets/Nomnommap.png"
import slide3 from "../assets/PlanningPal.png"

function Home() {
   const openInNewTab = (url) => () => {
      window.open(url, '_blank', 'noopener,noreferrer');
   };

   return (
      <>
         <div id="everything-home">
            <h1 className="section-title">ﾟ+*:ꔫ:* About Me *:ꔫ:*+ﾟ</h1>
            <div id="about-me">
               <div id="pic-and-desc">
                  <img id="about-me-pic" src={ally} alt="picture of Allison Ly" loading="lazy"/>
                  <p id="about-me-para">
                  Hi, my name is Allison Ly and welcome to my portfolio website! I am a Computer Science major at Cal Poly Pomona and will be 
                  graduating in December 2024. In my free time, I enjoy drawing, reading, watching anime, and playing games. I am interested in 
                  Frontend Development, UI/UX Design, Project Management, and Software Engineering. I have maintained a GPA of 3.67 and made the 
                  Dean’s Honors List every semester. For almost three years I have been an active member of Cal Poly Pomona’s sheCodes club, which 
                  supports underrepresented students in STEM. I also participated in the Summer 2023 Unmanned Aerial Vehicle Research Experience 
                  for Undergrads at Cal Poly Pomona, where I gained interdisciplinary experience.
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
                     onClick={() => {window.location.href = 'mailto:allison.y.ly@gmail.com';}}>
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
            <div className="slidehow">
               <div className="slides">
                  <img src={slide1} alt="Restaurant Delivery System Project Preview"></img>
                  <img src={slide2} alt="Nomnommap Project Preview"></img>
                  <img src={slide3} alt="Planning Pal Project Preview"></img>
               </div>
               <button className="prev_btn">&#10094;</button>
               <button className="next_btn">&#10095;</button>
            </div>
            <div id="work-exp">
               <h1 className="section-title">: *✧･ﾟ:* Work Experience *:･ﾟ✧*:</h1>
               <Description 
                  title="Research Experience for Undergrads (REU)"
                  duration="June - August 2023"
                  desc="I participated in a National Science Foundation (NSF) funded Research Experience for Undergrads (REU) at Cal Poly Pomona 
                  as an Unmanned Aerial Vehicle (UAV) research assistant on the 'UAV Fire Detection and Suppression' team. Selected as one of 12 
                  participants from over 100 applicants, I gained hands-on experience with both hardware and software. The main tasks assigned to 
                  me were connecting the UAV to the ground control station (GCS) to relay the flight log data, as well as improve the visualization 
                  of that data. I configured two Digi XBee radio communication devices using XCTU software to enable the UAV to send GPS coordinates 
                  to the GCS. I utilized NASA's Worldwide Wind Java API with NetBeans to ensure the GCS received and displayed the correct GPS 
                  coordinates. To enhance data visualization, I created a graphical user interface using Java Swing to display the UAV flight log data. 
                  At the end of the program, I co-authored a final report with my team discussing our literature review, objectives, methodology, and 
                  results for research paper."/>
               <Description 
                  title="Aims Academy"
                  duration="July - December 2022"
                  desc="For half a year I worked as a teacher at Aims Academy, located in Walnut CA. During the Summer, I managed 10 students in a combination 
                  class of 2nd-3rd graders, and in the school semester I managed 15 students in a combination class of K-1st graders. I taught Math and English 
                  to students in various learning stages using common core methods, and provided homework assistance. Additionally, I tutored Pre-Algebra and 
                  Algebra 1 weekly during the semester."/>
            </div>
            <div id="extra-exp">
               <h1 className="section-title">⋆ ˚｡⋆୨୧˚ Extracurricular ˚୨୧⋆｡˚ ⋆</h1>
               <Description 
                  title="Cal Poly Pomona sheCodes Internal Vice President"
                  duration="May 2023 - May 2024"
                  desc="As Internal Vice President, I was in charge of our two annual professional events, our Semester Long Project (SLP) Program during the Fall 
                  and our Future Woman Developer’s (FWD) Conference. I planned and organized SLP 2023 to offer underrepresented students team project opportunities 
                  that allow them to explore CS topics outside of class. During 9 weeks of SLP, I oversaw the development of 8 teams and facilitated Demo Day. I 
                  directed and hosted the FWD 2024 conference, introducing 25 middle/high school female and minority students to various CS topics. I provided students 
                  with 3 hands-on workshops about Web Development, Python, and Cybersecurity, as well as a Minority in Tech panel."/>
               <Description 
                  title="Cal Poly Pomona sheCodes Social Chair"
                  duration="May 2023 - May 2024"
                  desc="As Social Chair, I was in charge of planning and hosting monthly socials, executive board retreats, and our End of the Year banquet for over 50 members.  
                  Each social event aimed to foster an inclusive and supportive environment for women and minorities in STEM. Moreover, the executive board retreats focused on 
                  building teamwork skills for the school year, while the banquet celebrated the accomplishments and achievements of sheCodes throughout the year."/>
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