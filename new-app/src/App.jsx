
import './App.css';
import Header from "./components/header/Header";
import Block2 from './components/block2/block2';
import Block4 from './components/block4/block4';
function App() {
  return (

    <div className="App ">
      <div className="App-header">
        <Header/>
        <Block2/>
        {/* <Block4/>/ */}
      </div>
    </div>
  );
}

export default App;
