import PropTypes from "prop-types"

// this component creates handles the layout and details for an individual experience
function ExperiencesInfo({ experiencesObj }) {
   /**
    * 1. splits description string into an sentences
    * 2. filters out empty strings and removes whitespace
    * 3. creates a new array by mapping each non-empty sentence into list items (<li> elements)
    */
   const bulletPoints = experiencesObj.desc.split(".").filter(sentence => sentence.trim().length > 0).map((sentence, index) => (
      <li key={index}>{sentence.trim() ? sentence.trim() + "." : ""}</li>
   ));

   return (
      <div className="border-2 border-[#dd127f] rounded-[10px] shadow-[5px_5px_5px_#FBACBE]
         bg-white p-5 m-5 flex flex-col justify-center items-center text-center">
         <h2>{experiencesObj.name}</h2>
         <p>{experiencesObj.year}</p>
         <div className="bg-white text-black p-3 text-left w-full">
            <ul className="list-disc pl-6 text-sm">
               {bulletPoints}
            </ul>
         </div>
      </div>
   );
}

export default ExperiencesInfo

// used to specify and verify types of variables required for each key in experiencesObj
ExperiencesInfo.propTypes = {
  experiencesObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};