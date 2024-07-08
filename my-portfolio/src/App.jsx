import NavBar from "./NavBar"
import Footer from "./Footer"
import Home from "./pages/Home"
import Work from "./pages/Work"
import Fun from "./pages/Fun"

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
    default:
      component = <Home />
  }
  return (
    <>
      <NavBar />
      {component}
      <Footer />
    </>
  );
}

export default App
