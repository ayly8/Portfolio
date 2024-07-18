import PropTypes from 'prop-types'
import '../css/project.css'

function Project(props) {
   const openInNewTab = (url) => () => {
      window.open(url, '_blank', 'noopener,noreferrer');
   };

   return (
      <div className="proj">
         <h3 className="proj-title">{props.title}</h3>
         <img className="proj-img" src={props.img} alt={props.imgdesc}></img>
         <h4 className="brief-desc">{props.briefdesc}</h4>
         <div className="links">
            <div 
               className="github-link"
               onClick={openInNewTab(props.githublink)}>
               <h4>Github</h4>
            </div>
            <div 
               className="desc-div"
               onClick={openInNewTab(props.githublink)}>
               <h4>Description</h4>
            </div>
         </div>
         <p className="proj-full-desc">{props.fulldesc}</p>
      </div>
   );
}

Project.propTypes= {
   title: PropTypes.string.isRequired,
   img: PropTypes.string.isRequired,
   imgdesc: PropTypes.string.isRequired,
   briefdesc: PropTypes.string.isRequired,
   githublink: PropTypes.string.isRequired,
   fulldesc: PropTypes.string.isRequired,
}

export default Project