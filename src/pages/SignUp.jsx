import React, {useState} from 'react';
import Joi from "joi-browser";

import axios from '../utils/axios';
import './SignUp.css'


function SignUp(props) {

    const [customer, setCustomer] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",    
      });
      const [errors, setErrors] = useState({});
      const [res,setRes] = useState({})
      const schema = {
        firstname: Joi.string().min(1).max(20).required(),
        lastname: Joi.string().required(),
        username: Joi.string().min(1).max(20).required(),
        password: Joi.string().min(5).max(200).required(),    
      };
    
      const validateForm = (event) => {
        event.preventDefault();
        const result = Joi.validate(customer, 
            schema, { abortEarly: false });
        console.log("showing result",customer,schema);
        const { error } = result;
        if (!error) {
            axios.post('/api/auth/signup', customer)
            .then((response) => {
              setRes(response.data)
              console.log(response.data)
            })
            .catch(function (error) {
              console.log(error);
            });
          


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
        console.log("handleSave customerdata", customer);
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
          firstname: "",
          lastname: "",
          username: "",
          password: '',      
        });
      };



    return (
        <div className='container'>
            <h1>Sign Up Page</h1>
            <div className="container mt-3 ">
            <form className='w-50 mt-3 p-3'>


                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" name="firstname" className="form-control" id="firstname" value={customer.firstname} onChange={handleSave} />
                    {errors.firstName && (<div className="alert alert-danger">{errors.firstname}</div>)}
                </div>


                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" name="lastname" className="form-control" id="lastname" value={customer.lastname} onChange={handleSave}/>
                    {errors.lastName && (<div className="alert alert-danger"> {errors.lastname}  </div>  )}

                </div>


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



                <button type="submit" className="btn btn-primary" onClick={validateForm}>Sign Me Up</button>
            </form>



            </div>
        </div>
    );
}

export default SignUp;