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
            <h1 className="section-title">༻❀༺ Anime Fanart ༻❀༺</h1>
            <div id="art-imgs">
               <div id="left-imgs">
                  <img src={hxh} alt="gon and killua drawing from hxh" loading="lazy"/>
                  <img src={mirio} alt="mirio drawing from bnha" loading="lazy"/>
                  <img src={eri} alt="eri drawing from bnha" loading="lazy"/>
               </div>
               <div id="right-imgs">
                  <img src={tanjiro} alt="tanjiro drawing from demon slayer" loading="lazy"/>
                  <img src={mujika} alt="mujika painting from promised neverland" loading="lazy"/>
                  <img src={nezuko} alt="nezuko drawing from demon slayer" loading="lazy"/>
                  <img src={koro} alt="koro painting from assassination classroom" loading="lazy"/>
               </div>
            </div>
            <SeeMore 
               first_location="/"
               first_option_name="Home"
               second_location="/projects"
               second_option_name="Projects"/>
            <br></br>
         </div>
      </>
   );
}

export default Fun