import PropTypes from 'prop-types'

function Desc(props) {
   return (
      <div id="desc">
         <h3 id="desc-title">{props.title}</h3>
         <h5 id="desc-duration">{props.duration}</h5>
         <p id="desc-para">{props.desc}</p>
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