import SeeMore from "../components/SeeMore"
import '../css/fun.css'
import eri from '../assets/art/eri.jpg'
import hxh from '../assets/art/hxh.jpg'
import koro from '../assets/art/koro.jpg'
import mirio from '../assets/art/mirio.jpg'
import mujika from '../assets/art/mujika.jpg'
import nezuko from '../assets/art/nezuko.jpg'
import tanjiro from '../assets/art/tanjiro.jpg'

function Fun() {
   return (
      <>
         <div id="everything-fun">
            <div id="artwork">
               <h1 className="section-title">༻❀༺ Artwork ༻❀༺</h1>
               <p id="art-para">
                  I like to draw and paint in my free time. These are some of my anime fanart that I have
                  done throughout the years, featuring characters from Hunter x Hunter, Demon Slayer, My Hero
                  Academia, The Promised Neverland, and Assassination Classroom. 
               </p>
            </div>
            <div id="art-imgs">
               <div id="left-imgs">
                  <img src={hxh} alt="gon and killua drawing from hxh"/>
                  <img src={tanjiro} alt="tanjiro drawing from demon slayer"/>
                  <img src={koro} alt="koro painting from assassination classroom"/>
                  <img src={eri} alt="eri drawing from bnha"/>
               </div>
               <div id="right-imgs">
                  <img src={mujika} alt="mujika painting from promised neverland"/>
                  <img src={mirio} alt="mirio drawing from bnha"/>
                  <img src={nezuko} alt="nezuko drawing from demon slayer"/>
               </div>
            </div>
            <SeeMore 
               first_location="/"
               first_option_name="Home"
               second_location="/work"
               second_option_name="Work"/>
            <br></br>
         </div>
      </>
   );
}

export default Fun