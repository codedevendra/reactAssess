import React, { useContext, useState } from 'react'
import{memberContext} from "../App";

import addMember from "../Actions/addMember";

import {useDispatch} from "react-redux";

export default function AddMember() {

    const members=useDispatch();

    const [member,setMember]=useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        city:""
    });

    function onEvent(event){
        setMember({...member,[event.target.name]:event.target.value});
    }
    function onSubmit(event){
        event.preventDefault();

        setMember({name:"",email:"",phone:"",address:"",city:""});
        
        members(addMember(member));
    }

  return (
    <div className='container mt-4'>
      <form onSubmit={onSubmit}>
      <div className='row'>
            <div className="mb-3">
                <label  className="form-label">Enter name</label>
                <input onChange={onEvent} type="text" name="name" value={member.name} className="form-control" placeholder="Enter name"/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" onChange={onEvent} className="form-control" value={member.email} name="email"  placeholder="Enter email"/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Enter phone number</label>
                <input type="number" onChange={onEvent} className="form-control" name="phone" value={member.phone}  placeholder="Enter phone number"/>
            </div>

            <div className="mb-3">
                <label  className="form-label">Address</label>
                <input onChange={onEvent} type="text" className="form-control" name="address" value={member.address}  placeholder="Enter address"/>
            </div>

            <div className="mb-3">
                <label  className="form-label">Enter city</label>
                <input type="text" onChange={onEvent} className="form-control" name="city" value={member.city}  placeholder="Enter city"/>
            </div>

            <button className='btn btn-primary'>Add member</button>

        </div>
      </form>
    </div>
  )
}
