import { useState } from "react"
import PropTypes from "prop-types"

// this component creates handles the layout and details for an individual project 
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
      <div className="border-2 border-[#dd127f] rounded-[10px] shadow-[5px_5px_5px_#FBACBE]bg-white 
         p-4 m-4 flex flex-col justify-center items-center gap-3 flex-1">
         <h2>{projectsObj.name}</h2>
         <p>{projectsObj.briefDesc}</p>
         <img className="w-[350px] h-auto" src={projectsObj.photoName} alt={projectsObj.photoDesc} />
         <div className="flex gap-3">
            <button className="bg-[#FBACBE] text-[#dd127f] border border-[#FBACBE] rounded-md font-mono text-sm
               w-[100px] p-2 hover:bg-white hover:text-[#dd127f] hover:border-[#dd127f] cursor-pointer" 
               onClick={openInNewTab(projectsObj.githubLink)}>GitHub</button>
            <button className="bg-[#FBACBE] text-[#dd127f] border border-[#FBACBE] rounded-md font-mono text-sm
               w-[100px] p-2 hover:bg-white hover:text-[#dd127f] hover:border-[#dd127f] cursor-pointer" 
               onClick={toggleDescription}>Read More</button>
         </div>
         {/* this creates the toggle feature for seeing the full project description */}
         {descVisible && (
            <div className="bg-white text-black p-3 text-left w-full">
               <ul className="list-disc pl-6 text-sm">
                  {bulletPoints}
               </ul>
            </div>
         )}
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