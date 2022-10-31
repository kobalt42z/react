import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter.jsx";
import Caroussel from "./components/Caroussel";
import ColorsPiker from "./components/ColorsPiker";

function App() {
  return (
    <>
      <h1 className="row justify-content-center text-success">Hello world !</h1>

    <Counter/>
    <hr/>
  <Caroussel/>
  <hr />
  <ColorsPiker/>

    </> 
  );
}

export default App;
