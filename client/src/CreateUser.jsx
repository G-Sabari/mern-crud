import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function CreateUser(){
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{name,email,age})
        .then(result => {
            console.log(result)
            navigate('/')
        }) 
        .catch(err => console.log(err))
    }
    
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input className="form-control" type="text" placeholder="Enter your name" onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input className="form-control" type="text" placeholder="Enter your email address" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input className="form-control" type="text" placeholder="Enter your age" onChange={(e)=>setAge(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>

            </div>
            
        </div>
    )

}
export default CreateUser;