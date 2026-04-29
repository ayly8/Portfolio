import styles from './navbar.module.css'

// this component creates the navigation bar section
function NavBar() {
   return (
      <nav className={styles.nav}>
         <span className={styles.title}>AYLY Portfolio Website</span>
      </nav>
   );
}

export default NavBar