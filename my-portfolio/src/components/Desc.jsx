import PropTypes from 'prop-types'
import '../css/desc.css'

// this component creates a description section for any type of experience
function Desc(props) {
   /**
    * 1. splits description string into an sentences
    * 2. filters out empty strings and removes whitespace
    * 3. creates a new array by mapping each non-empty sentence into list items (<li> elements)
    */
   const bulletPoints = props.desc.split('.').filter(sentence => sentence.trim().length > 0).map((sentence, index) => (
      <li key={index}>{sentence.trim() ? sentence.trim() + '.' : ''}</li>
   ));

   return (
      <div className="desc">
         <h3 className="desc-title">{props.title}</h3>
         <h4 className="desc-duration">{props.duration}</h4>
         <div className="desc-para">
            <ul>
               {bulletPoints}
            </ul>
         </div>
      </div>
   );
}

// specify what type of variable is required for each prop
Desc.propTypes= {
   title: PropTypes.string.isRequired,
   duration: PropTypes.string.isRequired,
   desc: PropTypes.string.isRequired,
}

export default Desc