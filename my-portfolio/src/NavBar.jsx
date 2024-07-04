function NavBar() {
   return (
      <nav className="nav">
         <a href="/" className="ayly-title">AYLY</a>
         <ul>
            <li><a href="/work">Work</a></li>
            <li><a href="/fun">Fun</a></li>
            <li><a href="/about">About</a></li>
         </ul>
      </nav>
   );
}

export default NavBar