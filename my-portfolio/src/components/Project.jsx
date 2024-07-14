import PropTypes from 'prop-types'
import '../css/project.css'

function Project(props) {
   return (
      <div className="proj">
         <img className="proj-img" src={props.img} alt={props.imgdesc}></img>
         <h3 className="proj-title">{props.title}</h3>
         <h4 className="proj-brief-desc">{props.briefdesc}</h4>
         <h4 className="proj-role">Role: {props.role}</h4>
         <button className="proj-desc-btn">Description</button>
         <p className="proj-full-desc">{props.fulldesc}</p>
      </div>
   );
}

Project.propTypes= {
   img: PropTypes.string.isRequired,
   imgdesc: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   briefdesc: PropTypes.string.isRequired,
   role: PropTypes.string.isRequired,
   fulldesc: PropTypes.string.isRequired,
}

export default Project