import { Link } from "react-router-dom"

function NavBar() {
   return (
      <nav id="nav">
         <Link to="/" id="ayly-title">Allison Y. Ly</Link>
         <ul>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/fun">Fun</Link></li>
         </ul>
      </nav>
   );
}

export default NavBar