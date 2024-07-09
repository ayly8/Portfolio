import PropTypes from 'prop-types'

function Desc(props) {
   return (
      <div className="desc">
         <h3 className="desc-title">{props.title}</h3>
         <h5 className="desc-duration">{props.duration}</h5>
         <p className="desc-para">{props.desc}</p>
      </div>
   );
}

Desc.propTypes= {
   title: PropTypes.string,
   duration: PropTypes.string,
   desc: PropTypes.string,
}

Desc.defaultProps= {
   title: "Example Title",
   duration: "Example Duration",
   desc: "Example Description",
}

export default Desc