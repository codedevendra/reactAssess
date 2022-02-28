import React, { useContext } from 'react'

import {memberContext} from "../App";

import {useSelector} from "react-redux";

export default function DisplayMembers() {

    const members=useSelector((state)=>state.members);
    

  return (
    <div className='container mt-4'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                </tr>
            </thead>
            <tbody>

                {
                    members.map((item,index)=>{
                       return <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                        </tr>
                    })
                }
            
            </tbody>
        </table>        
    </div>
  )
}
