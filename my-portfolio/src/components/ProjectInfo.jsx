import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../css/projectinfo.css'

// this component creates the info section for a project
function Project(props) {
   // react hook used to track state of a function component (in this case, if description is visible)
   const [descVisible, setDescVisible] = useState(false);

   // updates state of description visibility
   const toggleDescription = () => {
      setDescVisible(!descVisible);
   };

   // opens given link in a new tab
   const openInNewTab = (url) => () => {
      window.open(url, '_blank', 'noopener,noreferrer');
   };

   /**
    * 1. splits description string into an sentences
    * 2. filters out empty strings and removes whitespace
    * 3. creates a new array by mapping each non-empty sentence into list items (<li> elements)
    */
   const bulletPoints = props.fullDesc.split('.').filter(sentence => sentence.trim().length > 0).map((sentence, index) => (
      <li key={index}>{sentence.trim() ? sentence.trim() + '.' : ''}</li>
   ));

   return (
      <div className="proj">
         <h2 className="proj-title">{props.title}</h2>
         <h4 className="brief-desc">{props.briefDesc}</h4>
         <img className="proj-img" src={props.img} alt={props.imgDesc}></img>
         <div className="links">
            <button
               className="link-btn"
               onClick={openInNewTab(props.link)}>
               {props.linkName}
            </button>
            <button 
               className="desc-btn"
               onClick={toggleDescription}>
               Description
            </button>
         </div>
         {/* this creates the toggle feature for seeing the full proj description */}
         <div className={`proj-full-desc ${descVisible ? "visible" : "hidden"}`}>
            <ul>
               {bulletPoints}
            </ul>
         </div>
         <p><a className="demo-link" href={props.demoLink} target="_blank">{props.demoDesc}</a></p>
      </div>
   );
}

// specify what type of variable is required for each prop
Project.propTypes= {
   title: PropTypes.string.isRequired,
   briefDesc: PropTypes.string.isRequired,
   img: PropTypes.string.isRequired,
   imgDesc: PropTypes.string.isRequired,
   demoLink: PropTypes.string.isRequired,
   demoDesc: PropTypes.string.isRequired,
   link: PropTypes.string.isRequired,
   linkName: PropTypes.string.isRequired,
   fullDesc: PropTypes.string.isRequired,
}

export default Project