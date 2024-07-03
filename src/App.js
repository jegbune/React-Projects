import './App.css'
import Https from './Component/Http_Request/Https';
import ArrayUseState from './Component/Immutable State/ArrayUseState';
import ObjectUseState from './Component/Immutable State/ObjectUseState';
import Parent from './Component/Parent Child/Parent';
import Recipes from './Component/Projects/Recipes';
import UseReducer from './Component/UseReducer/UseReducer';
import UseState from "./Component/useState/UseState";

function App() {
  return (
    <div className='App'>
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent />  */}
      {/* <Https /> */}
      <Recipes />
    </div>
  )   
}

export default App;
