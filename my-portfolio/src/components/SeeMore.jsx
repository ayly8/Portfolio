import PropTypes from 'prop-types'
import '../css/seemore.css'

function SeeMore(props) {
   return (
      <>
         <h1 className="section-title">⋆｡ﾟ✿｡⋆｡ See More ⋆｡ﾟ✿｡⋆｡</h1>
         <div className="see-more">
            <div className="see-more-options" onClick={props.first_location}>
               <h3>{props.first_option_name}</h3>
            </div>
            <div className="see-more-options" onClick={props.second_location}>
               <h3>{props.second_option_name}</h3>
            </div>
         </div>
      </>
   );
}

SeeMore.propTypes= {
   first_location: PropTypes.func.isRequired,
   first_option_name: PropTypes.string.isRequired,
   second_location: PropTypes.func.isRequired,
   second_option_name: PropTypes.string.isRequired,
}

export default SeeMore