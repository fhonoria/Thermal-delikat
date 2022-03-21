import "./App.css";
import "./components/Introduction";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Team from "./components/Team";
import Products from "./components/Products";
import logo from "./images/logo.png";
import Contact from "./components/Contact";
import Slideshow from "./components/Slideshow";

function App() {
  return (
    <div className="App">
      <Navbar />
      <img
        src={logo}
        alt="Thermal delikat logo"
        className="img-fluid w-25 mx-auto d-block"
      ></img>

      <Introduction />
      <Team />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
