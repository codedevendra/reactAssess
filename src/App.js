import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavComponent from './components/NavComponent';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import DisplayMembers from './components/DisplayMembers';
import AddMember from './components/AddMember';
import LoginComponent from './components/LoginComponent';
import { createContext, useState } from 'react';


const memberContext=createContext([]); 

function App() {

  const [state,setState]=useState({isLogin:false, members:[]})
  return (
    <>
    <memberContext.Provider value={state}>
    <BrowserRouter>
    <NavComponent/>
    <Routes>
      <Route path='/' element={<DisplayMembers/>} >

      </Route>
      <Route path='/add-member' element={<AddMember/>} >

      </Route>
      <Route path='/login' element={<LoginComponent/>} >

      </Route>
    </Routes>
    </BrowserRouter>
    </memberContext.Provider>
    
    
    </>
  );
}

export default App;

export {memberContext};
