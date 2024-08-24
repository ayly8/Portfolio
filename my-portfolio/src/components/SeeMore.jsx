import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../css/seemore.css'

// this component creates the see more section at the bottom of each page
function SeeMore(props) {
   // react hook used to navigate to pages
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
               <p>{props.first_option_name}</p>
            </div>
            <div className="see-more-options" onClick={() => handleNavigation(props.second_location)}>
               <p>{props.second_option_name}</p>
            </div>
         </div>
      </>
   );
}

// specify what type of variable is required for each prop
SeeMore.propTypes= {
   first_location: PropTypes.string.isRequired,
   first_option_name: PropTypes.string.isRequired,
   second_location: PropTypes.string.isRequired,
   second_option_name: PropTypes.string.isRequired,
}

export default SeeMore