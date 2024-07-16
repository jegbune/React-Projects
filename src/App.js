import { Route, Routes } from 'react-router-dom';
import Content from './Component/Projects/Content';
import UserProvider from './Component/Projects/UserContext';
import './App.css'
// import Https from './Component/Http_Request/Https';
// import ArrayUseState from './Component/Immutable State/ArrayUseState';
// import ObjectUseState from './Component/Immutable State/ObjectUseState';
// import Parent from './Component/Parent Child/Parent';
import AuthUser from './Component/Projects/AuthUser/AuthUser';
import Login from './Component/Projects/AuthUser/Login';
import Dashboard from './Component/Projects/AuthUser/Dashboard.js';
import UseStateObjectArray from './Component/Projects/UseStateObjectArray.js';
import { useState } from 'react';
import UseEffect from './Component/Projects/UseEffect.js';
import Script from './Component/Projects/Script.js';
import UseReducer from './Component/Projects/UseReducer.js';
import Modal from './Component/Projects/Modal.js';
import ModalApp from './Component/Projects/ModalApp.js';
import LiveOrder from './Component/Projects/LiveOrder.js';
import LoginButton from './Component/Projects/LoginButton.js';
// import Recipes from './Component/Projects/Recipes';
// import UseReducer from './Component/UseReducer/UseReducer';
// import UseState from "./Component/useState/UseState";
// import Callback from './Component/CallBack/Callback.js';
// import Test from './Component/CallBack/Test.js'
// import Test1 from './Component/CallBack/Test1.js';
// import TodoList from './Component/Todo/TodoList.js';
// import Console from './Component/Projects/Console.js';
// import Feedback from './Component/Projects/Feedback.js';

function App() {
// const [tasks, setTasks] = useState([])
//   function addGoal(goal) {
//     setTasks([...tasks, goal])
//   }
  return (
    <div>
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
      {/* <Callback /> */}
      {/* <Test /> */}
      {/* <Test1 /> */}
      {/* <TodoList /> */}
      {/* <Console /> */}
      {/* <Feedback /> */}
      {/* <Header /> */}
      {/* <UserProvider /> */}
      {/* <UseStateObjectArray onAdd= {addGoal} tasks = {tasks} /> */}
      {/* <UseEffect /> */}
      {/* <Script /> */}
      {/* <UseReducer /> */}
      {/* <Modal /> */}
      {/* <ModalApp /> */}
      {/* <LiveOrder /> */}
      {/* <LoginButton /> */}
    </div>
  )   
}

export default App;
