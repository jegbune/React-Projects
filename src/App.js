import { Route, Routes } from 'react-router-dom';
import './App.css'
import Https from './Component/Http_Request/Https';
import ArrayUseState from './Component/Immutable State/ArrayUseState';
import ObjectUseState from './Component/Immutable State/ObjectUseState';
import Parent from './Component/Parent Child/Parent';
import AuthUser from './Component/Projects/AuthUser/AuthUser';
import Login from './Component/Projects/AuthUser/Login';
import Dashboard from './Component/Projects/AuthUser/Dashboard.js';
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
      {/* <Recipes /> */}
      {/* <AuthUser /> */}
      
      <Routes>
        <Route path='/React-Projects' element= {<Login />} />
        <Route path='/AuthUser' element= {<AuthUser />} />
        <Route path='/dashboard' element= {<Dashboard />} />
      </Routes>
      {/* <Login /> */}

    </div>
  )   
}

export default App;
