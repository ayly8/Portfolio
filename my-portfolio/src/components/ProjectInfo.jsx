import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../css/projectinfo.css'

function Project(props) {
   const [descVisible, setDescVisible] = useState(false);

   const toggleDescription = () => {
      setDescVisible(!descVisible);
   };

   const openInNewTab = (url) => () => {
      window.open(url, '_blank', 'noopener,noreferrer');
   };

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
         <p className={`proj-full-desc ${descVisible ? "visible" : "hidden"}`}>{props.fullDesc}</p>
         <p><a className="demo-link" href={props.demoLink} target="_blank">{props.demoDesc}</a></p>
      </div>
   );
}

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