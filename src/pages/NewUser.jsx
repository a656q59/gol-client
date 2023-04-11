import React, { useEffect, useState } from 'react';
import './NewUser.css';
import axios from '../utils/axios';
import {useParams} from "react-router-dom";


function NewUser(props) {
    const [res,setRes] = useState([]);
    const [queryParameters] = useParams()
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await axios.get('api/users');
            console.log("admin page res.data",res.data.user)
            console.log("queryParameters",queryParameters);
            // res.filter(r=>r._id===)

            setRes(res.data.user);
        }
        fetchData();
    },[]);

    const handleSubmit=()=>{

    }


    return (
        <div className='container h-50'>
          <h1>Update User/Admin page</h1>  
          <div className="container w-50 p-4">
          <form>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" name="firstname" className="form-control" id="firstname" disabled />
                </div>


                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" name="lastname" className="form-control" id="lastname" disabled/>

                </div>


                <div className="mb-3">
                <label htmlFor="role" className="form-label">Role</label>
                <input type="name" className="form-control" id="role" name='role'/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
        </form>
          </div>
        </div>
    );
}

export default NewUser;