import React, { useContext, useState } from 'react'
import { memberContext } from '../App';
import {useNavigate} from "react-router-dom";
import setLoginAction from "../Actions/setLogin";
import {useDispatch} from "react-redux";

export default function LoginComponent() {

  const stateDispatcher=useDispatch();

  const navigate=useNavigate();

  const[login,setLogin]=useState({email:"",password:""});

  function onEvent(event)
  {

    setLogin({...login,[event.target.name]:event.target.value});
  }

  function onSubmit(event)
  {
    event.preventDefault();
    if(login.email=="example@gmail.com"&&login.password=="123456")
    {
      stateDispatcher(setLoginAction(true));
      navigate("/");
    }else{
      alert("invalid credentials");
    }
  
  }

  return (

    <div className='row' >
      <div className='col-sm-3'>

      </div>

      <div className='col-sm-6 mt-4'>

      <form onSubmit={onSubmit}>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" name='email' onChange={onEvent} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" name="password" onChange={onEvent} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary mt-4">Submit</button>
</form>

      </div>

    </div>
  )
}
