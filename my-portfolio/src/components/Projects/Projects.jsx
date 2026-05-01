import journal from "../../assets/project_ss/journal_ss.png"
import cowcomic from "../../assets/project_ss/cowcomic_ss.png"
import restaurant from "../../assets/project_ss/restaurant_ss.png"
import nomnommap from "../../assets/project_ss/nomnommap_ss.png"
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo.jsx"
import styles from "./projects.module.css"

const projectsData = [
   {
      name: "My Journal App",
      briefDesc: "React Web Application | Feb 2025 - Oct 2025",
      photoName: journal,
      photoDesc: "journal app login register page",
      githubLink: "https://github.com/ayly8/Journal",
      fullDesc: 
      "Engineered a full-stack web application where users can manage journal entries and improve personal organization. Integrated an authentication system using Java Spring Boot and MongoDB Atlas, enabling account registration, login, and retrieval of previous journal entries. Developed RESTful APIs with Java Spring Boot to handle HTTP requests, allowing users to perform CRUD operations such as creating, updating, and deleting journal entries",
   },
   {
      name: "CowComic",
      briefDesc: "React Web Application | Sept 2024 - Dec 2024",
      photoName: cowcomic,
      photoDesc: "cowcomic book survey page",
      githubLink: "https://github.com/DDeraJJ-Deluxe/CowComic",
      fullDesc: 
      "Collaborated with a team of 4 to create a React web application within 3 months, where users receive a book recommendation after completing a survey and can save book recommendations. Leveraged Firebase to establish an authentication system, allowing users to register or log in to an existing account. Implemented a save book feature using Firestore NoSQL database, enabling users to access and view their previous recommendations after logging into their existing account.",
   },
   {
      name: "Restaurant Delivery System",
      briefDesc: "Java Desktop Application | Feb 2023 - May 2023",
      photoName: restaurant,
      photoDesc: "restaurant info page",
      githubLink: "https://github.com/CS3560-02-07/Restaurant-Delivery-System",
      fullDesc: 
      "Collaborated with a team of 5 to create a Java desktop application, allowing restaurants to request orders to be delivered and drivers to pick-up those orders. Conceptualized the graphical user interface (GUI) by using Figma. Utilized Java Swing to integrate GUI components: login, account registration, profiles for restaurant owners and delivery drivers.",
   },
   {
      name: "NomNomMap",
      briefDesc: "Android Mobile Application | Nov 2023 - Dec 2023",
      photoName: nomnommap,
      photoDesc: "nomnommap app screenshots",
      githubLink: "https://github.com/yuunster/NomNomMap",
      fullDesc: 
      "Collaborated with a team of 3 to create an Android mobile application, utilizing the Google Maps API where users can login and store information about meals. Enhanced user experience by implementing a bottom navigation bar and camera feature in Kotlin. Constructed the user interface for: Map, Meal Detail, Profile, and Settings, using Android Studio's Layout Editor to assemble components.",
   },
];

function Projects() {
   const projects = projectsData;

   return (
      <div className={styles.projects_section}>
         <h2 className={styles.projects_title}>+.* Projects +.*</h2>
         <div className={styles.projects}>
            {projects.map((project) => (
               <ProjectInfo projectsObj={project} key={project.name} />
            ))}
         </div>
      </div>
   );
}

export default Projects