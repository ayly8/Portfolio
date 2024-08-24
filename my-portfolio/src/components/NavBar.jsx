import { Link } from "react-router-dom"

// this component creates the navigation bar section
function NavBar() {
   return (
      <nav id="nav">
         <Link to="/" id="ayly-title">Allison Y. Ly</Link>
         <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/fun">Fun</Link></li>
         </ul>
      </nav>
   );
}

export default NavBar