import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom";
import { memberContext } from '../App';



import {useStore} from "react-redux";

export default function NavComponent() {

   let store=useStore();

   let [isLogin,setIsLogin]=useState(false);

   store.subscribe(()=>{
     let state=store.getState();
     setIsLogin(state.isLogin);
      isLogin=state.isLogin;
   })

  // const isLogin=useContext(memberContext).isLogin;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className='nav-link' to="/" > Home </Link>
     
          </li>
          
          { isLogin?<li className="nav-item">
       <Link className='nav-link' to="/add-member" > Add member </Link></li>
       : <Link className='nav-link' to="/login" >Login</Link>}
     
         
     
          {/* <Link className='nav-link' to="/add-member" > Add member </Link> */}
     
          {/* <li className="nav-item">
              <Link className='nav-link' to="/login" > Login </Link>
          </li> */}

        </ul>

      </div>
    </div>
  </nav>
  )
}
