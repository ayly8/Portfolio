import NavBar from "./NavBar"
import Home from "./pages/Home"
import Work from "./pages/Work"
import Fun from "./pages/Fun"
import About from "./pages/About"

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/work":
      component = <Work />
      break
    case "/fun":
      component = <Fun />
      break
    case "/about":
      component = <About />
      break
    default:
      component = <Home />
  }
  return (
    <>
      <NavBar />
      {component}
    </>
  );
}

export default App
