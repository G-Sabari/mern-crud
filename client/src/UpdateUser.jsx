import React,{useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function Updateuser(){

    const {id} = useParams()
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const navigate = useNavigate()    

    useEffect(()=>{
        axios.get(`http://localhost:3001/getuser/${id}`)
        .then(result=>{console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err=>console.log(err))
    },[])

    const Update = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3001/updateUser/${id}`,{name,email,age})
        .then(result => {
            console.log(result)
            navigate('/')
        }) 
        .catch(err => console.log(err))
    }

    return(
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input className="form-control" type="text" placeholder="Enter your name"  onChange={(e)=>setName(e.target.value)} value={name}></input>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input className="form-control" type="text" placeholder="Enter your email address"  onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input className="form-control" type="text" placeholder="Enter your age" onChange={(e)=>setAge(e.target.value)} value={age}></input>
                    </div>
                    <button type="submit" className="btn btn-success">Update</button>
                </form>

            </div>
            
        </div>
    )

}
export default Updateuser;