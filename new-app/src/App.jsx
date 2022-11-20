
import './App.scss';
import Header from "./components/header/Header";
import Block2 from './components/block2/block2';
import Block3 from './components/block3/block3';
import Block1 from './components/block1/block1';
import Block4 from './components/block4/block4';
import Footer from './components/Footer/footer';
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
        <hr class="border border-white border-5 opacity-75"/>
       <Block4/>
       <hr class="border border-white border-5 opacity-75"/>
       <Footer/>

        
      </div>
    </div>
  );
}

export default App;
