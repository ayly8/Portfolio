import PropTypes from "prop-types"
import styles from "./experiencesinfo.module.css"

function ExperiencesInfo({ experiencesObj }) {
   /**
    * 1. splits description string into an sentences
    * 2. filters out empty strings and removes whitespace
    * 3. creates a new array by mapping each non-empty sentence into list items (<li> elements)
    */
   const bulletPoints = experiencesObj.desc.split(".").filter(sentence => sentence.trim().length > 0).map((sentence, index) => (
      <li key={index}>{sentence.trim() ? sentence.trim() + "." : ""}</li>
   ));

   return (
      <div className={styles.experiences_section}>
         <h2 className={styles.experience_name}>{experiencesObj.name}</h2>
         <h4 className={styles.experience_year}>{experiencesObj.year}</h4>
         <div className={styles.experience_desc}>
            <ul>
               {bulletPoints}
            </ul>
         </div>
      </div>
   );
}

export default ExperiencesInfo

// used to specify and verify types of variables required for each key in experiencesObj
ExperiencesInfo.propTypes = {
  experiencesObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};