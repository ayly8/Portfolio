import PropTypes from 'prop-types'
import '../css/desc.css'

function Desc(props) {
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

Desc.propTypes= {
   title: PropTypes.string.isRequired,
   duration: PropTypes.string.isRequired,
   desc: PropTypes.string.isRequired,
}

export default Desc