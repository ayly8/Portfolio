import styles from './navbar.module.css'
// this component creates the navigation bar section
function NavBar() {
   return (
      // <nav id="nav">
      //    <Link to="/" id="ayly-title">Allison Y. Ly</Link>
      //    <ul>
      //       <li><Link to="/projects">Projects</Link></li>
      //       <li><Link to="/fun">Fun</Link></li>
      //    </ul>
      // </nav>
      <nav className={styles.nav}>
         <span className={styles.title}>Allison Y. Ly</span>
      </nav>
   );
}

export default NavBar