
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
        <hr class="mt-0 border border-white border-5 opacity-75"/>
        <Block1/>
        <hr class="border border-white border-5 opacity-75"/>
        <Block2/>
        <hr class="border border-white border-5 opacity-75"/>
        <Block3/>
        
      </div>
    </div>
  );
}

export default App;
