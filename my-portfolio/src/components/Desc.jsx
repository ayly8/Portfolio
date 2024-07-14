import PropTypes from 'prop-types'
import '../css/desc.css'

function Desc(props) {
   return (
      <div className="desc">
         <h3 className="desc-title">{props.title}</h3>
         <h4 className="desc-duration">{props.duration}</h4>
         <p className="desc-para">{props.desc}</p>
      </div>
   );
}

Desc.propTypes= {
   title: PropTypes.string.isRequired,
   duration: PropTypes.string.isRequired,
   desc: PropTypes.string.isRequired,
}

export default Desc