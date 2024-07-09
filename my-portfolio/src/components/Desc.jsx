import PropTypes from 'prop-types'

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

// Desc.defaultProps= {
//    title: "Example Title",
//    duration: "Example Duration",
//    desc: "Example Description",
// }

export default Desc