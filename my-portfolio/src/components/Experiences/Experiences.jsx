import ExperiencesInfo from "../../components/ExperiencesInfo/ExperiencesInfo.jsx"
import styles from "./experiences.module.css"

const experiencesData = [
   {
      name: "Dreams for Schools",
      year: "STEAM Instructor | March - August 2025",
      desc:
         "Co-instructed 20 K-5th graders in after-school classes to introduce STEAM concepts and encourage early engagement with technology. Taught block coding to students in various learning stages using Sphero Robots and Sphero EDU software to foster a hands-on learning environment.",
   },
   {
      name: "Cal Poly Pomona Research Experience for Undergrads",
      year: "Fire Team Research Assistant | June - August 2023",
      desc:
         "Enabled Unmanned Aerial Vehicle (UAV) location tracking by configuring two XBee radio communication devies to transmit GPS coordinates from the drone to the ground control station (GCS). Utilized NASA Worldwide Wind Java API to ensure the GCS received the GPS coordinates and displayed the correct drone location. Implemented a graphical user interface (GUI) with Java Swing to improve the UAV flight log data visualization on the GCS.",
   },
   {
      name: "Cal Poly Pomona sheCodes Club",
      year: "Internal VP & Social Chair | May 2023 - 2024",
      desc:
         "Orchestrated monthly socials, sheCodes’ 2022-2023 banquet, and two professional events for 50+ members to help foster a supportive community for aspiring women and minority students in STEM. Planned and organized sheCodes’ 9-week Semester Long Project (SLP) 2023 Program to offer underrepresented students project opportunities that allow them to explore CS topics outside of class. Directed and hosted sheCodes’ Future Women Developer’s 2024 Conference to introduce 25 middle/high school female and minority students to various CS topics by providing 3 hands-on workshops and a Minority in Tech panel.",
   },
];

function Experiences() {
   const experiences = experiencesData;

   return (
      <div className={styles.experience_section}>
         <h2 className={styles.experience_title}>˚୨୧ Experiences ୨୧˚</h2>
         <div className={styles.experiences}>
            {experiences.map((experience) => (
               <ExperiencesInfo experiencesObj={experience} key={experience.name} />
            ))}
         </div>
      </div>
   );
}

export default Experiences