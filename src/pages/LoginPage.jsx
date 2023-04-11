import React,{useEffect, useState} from 'react';
import'./LoginPage.css';
import Joi from "joi-browser";
import axios from '../utils/axios';
import { redirect, useNavigate } from "react-router-dom";




function LoginPage(props) {
    const [customer, setCustomer] = useState({       
        username: "",
        password: "",    
      });
      const [errors, setErrors] = useState({});
      const [res,setRes] = useState({})
      const [token,setToken] = useState('');
      const navigate=useNavigate();
      const schema = {       
        username: Joi.string().min(1).max(20).required(),
        password: Joi.string().min(5).max(200).required(),    
      };

      useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/admin')
        }
      },[res])

      const validateForm =async(event) => {
        event.preventDefault();
        const result = Joi.validate(customer, 
            schema, { abortEarly: false });
        const { error } = result;            
        if (!error) {           
            const dat = await axios.post('api/auth/signin', customer)      
                          setRes(dat.data);
                          console.log("value of res state after axios",dat);
                        localStorage.setItem('token',dat.data.token);       

         } else {
          const errorData = {};
          for (let item of error.details) {
            const name = item.path[0];
            const message = item.message;
            errorData[name] = message;
          }
          console.log(errors);
          setErrors(errorData);
          return errorData;
        }
      };

      const handleSave = (event) => {
        const { name, value } = event.target;
        let errorData = { ...errors };
        const errorMessage = validateProperty(event);
        if (errorMessage) {
          errorData[name] = errorMessage;
        } else {
          delete errorData[name];
        }
        let customerData = { ...customer };
        customerData[name] = value;
        setCustomer(customerData);
        setErrors(errorData);
      };

      const validateProperty = (event) => {
        const { name, value } = event.target;
        const obj = { [name]: value };
        const subSchema = { [name]: schema[name] };
        const result = Joi.validate(obj, subSchema);
        const { error } = result;
        return error ? error.details[0].message : null;
      };

      const clearState = () => {
        setCustomer({
          username: "",
          password: '',      
        });
      };

    



    return (
        <div className='container w-25'>
            {res.username!==undefined&&<div>hello {res.username}</div>}
           <form>
                
                <div className="mb-3 ">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" id="username" value={customer.username} onChange={handleSave} />
                    {errors.username && (<div className="alert alert-danger">{errors.username}</div>)}
                </div>


                <div className="mb-3 ">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" value={customer.password} onChange={handleSave} />
                    {errors.password && (<div className="alert alert-danger">{errors.password}</div>)}
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={validateForm}>Log In </button>
            </form>
        </div>
    );
}

export default LoginPage;