import "./App.css";
import "./components/Introduction";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Team from "./components/Team";
import Products from "./components/Products";
import logo from "./images/logo.png";
import salami from "./images/salami.jpg";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <img
        src={logo}
        alt="Thermal delikat logo"
        className="img-fluid w-25 mx-auto d-block"
      ></img>
      <div className="background-image">
        <div className="salami" style={{ backgroundImage: `url(${salami})` }}>
          <h1>Megnyitottunk</h1>
        </div>
      </div>
      <Introduction />
      <Products />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
