
import './App.css';
import Header from "./components/header/Header";
import Block2 from './components/block2/block2';
import Block3 from './components/block3/block3';
import Block1 from './components/block1/block1';
function App() {
  return (

    <div className="App ">
      <div className="App-header">
        <Header/>
        <Block2/>
        <Block3/>
        <Block1/>
      </div>
    </div>
  );
}

export default App;
