import SeeMore from "../components/SeeMore"

function Fun() {
   const navigateTo = (path) => () => {
      window.location.href = path;
   };

   return (
      <>
         <h1>Fun Test</h1>
         <SeeMore 
               first_location={navigateTo('/home')}
               first_option_name="Home"
               second_location={navigateTo('/work')}
               second_option_name="Work"/>
            <br></br>
      </>
   );
}

export default Fun