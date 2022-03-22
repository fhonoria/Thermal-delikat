import "./App.css";
import "./components/Introduction";
import Introduction from "./components/Introduction";
import Team from "./components/Team";
import Products from "./components/Products";
import Contact from "./components/Contact";
import BackgroundImage from "./components/BackgroundImage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <div className="container titel text-center">
        <h1>THERMÁL DELIKÁT</h1>
        <h2>
          <em>Megnyitottunk!</em>
        </h2>
      </div>
      <Introduction />
      <Products />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
