import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../css/seemore.css'

function SeeMore(props) {
   const navigate = useNavigate();

   const handleNavigation = (location) => {
      window.scrollTo(0, 0); // Scroll to the top
      navigate(location);    // Navigate to the new route
   };

   return (
      <>
         <p className="section-title">⋆｡✿ See More ✿⋆｡ﾟ</p>
         <div className="see-more">
            <div className="see-more-options" onClick={() => handleNavigation(props.first_location)}>
               <h3>{props.first_option_name}</h3>
            </div>
            <div className="see-more-options" onClick={() => handleNavigation(props.second_location)}>
               <h3>{props.second_option_name}</h3>
            </div>
         </div>
      </>
   );
}

SeeMore.propTypes= {
   first_location: PropTypes.string.isRequired,
   first_option_name: PropTypes.string.isRequired,
   second_location: PropTypes.string.isRequired,
   second_option_name: PropTypes.string.isRequired,
}

export default SeeMore