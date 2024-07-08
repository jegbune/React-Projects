import { Route, Routes } from 'react-router-dom';
import './App.css'
import Https from './Component/Http_Request/Https';
import ArrayUseState from './Component/Immutable State/ArrayUseState';
import ObjectUseState from './Component/Immutable State/ObjectUseState';
import Parent from './Component/Parent Child/Parent';
// import AuthUser from './Component/Projects/AuthUser/AuthUser';
import Login from './Component/Projects/AuthUser/Login';
import Dashboard from './Component/Projects/AuthUser/Dashboard.js';
import Recipes from './Component/Projects/Recipes';
import UseReducer from './Component/UseReducer/UseReducer';
import UseState from "./Component/useState/UseState";
import Callback from './Component/CallBack/Callback.js';
import Test from './Component/CallBack/Test.js'
import Test1 from './Component/CallBack/Test1.js';
import TodoList from './Component/Todo/TodoList.js';
import Console from './Component/Console.js';

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
      {/* <Routes>
        <Route path='/React-Projects' element= {<Login />} />
        <Route path='/AuthUser' element= {<AuthUser />} />
        <Route path='/dashboard' element= {<Dashboard />} />
      </Routes> */}
      {/* <Login /> */}
      {/* <Callback /> */}
      {/* <Test /> */}
      {/* <Test1 /> */}
      {/* <TodoList /> */}
      <Console />


    </div>
  )   
}

export default App;
