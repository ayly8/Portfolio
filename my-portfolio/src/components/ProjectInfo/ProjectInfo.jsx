import { useState } from "react"
import PropTypes from "prop-types"
import styles from "./projectinfo.module.css"

function ProjectInfo({ projectsObj }) {
    // used to track description visibility state 
   const [descVisible, setDescVisible] = useState(false);
   
   // opens given link in a new tab
   const openInNewTab = (url) => () => {
      window.open(url, "_blank", "noopener,noreferrer");
   };

   // updates state of description visibility
   const toggleDescription = () => {
      setDescVisible(!descVisible);
   };

   /**
    * 1. splits description string into an sentences
    * 2. filters out empty strings and removes whitespace
    * 3. creates a new array by mapping each non-empty sentence into list items (<li> elements)
    */
   const bulletPoints = projectsObj.fullDesc.split(".").filter(sentence => sentence.trim().length > 0).map((sentence, index) => (
      <li key={index}>{sentence.trim() ? sentence.trim() + "." : ""}</li>
   ));

   return (
      <div className={styles.projects_grid}>
         <h2>{projectsObj.name}</h2>
         <p>{projectsObj.briefDesc}</p>
         <img className={styles.proj_img} src={projectsObj.photoName} alt={projectsObj.photoDesc} />
         <div className={styles.btn_section}>
            <button className={styles.btn} onClick={openInNewTab(projectsObj.githubLink)}>GitHub</button>
            <button className={styles.btn} onClick={toggleDescription}>Read More</button>
         </div>
         {/* this creates the toggle feature for seeing the full project description */}
         <div className={`${styles.proj_full_desc} ${descVisible ? styles.visible : styles.hidden}`}>
            <ul>
               {bulletPoints}
            </ul>
         </div>
      </div>
   );
}

export default ProjectInfo

// used to specify and verify types of variables required for each key in projectsObj
ProjectInfo.propTypes = {
  projectsObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    briefDesc: PropTypes.string.isRequired,
    photoName: PropTypes.string.isRequired,
    photoDesc: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    fullDesc: PropTypes.string.isRequired,
  }).isRequired,
};