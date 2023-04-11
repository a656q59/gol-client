import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/axios';
import './AdminPage.css';

function AdminPage(props) {
    const[data,setData] = useState([]);
    useEffect(()=>{
         const fetchData=async()=>{
            const res=await axios.get('api/users/');
            // console.log("admin page res.data",res.data.user)
            setData(res.data.user);
        }
        fetchData();
    },[]);

        const handleDelete=async(da)=>{
            
            const id = da._id;
            await axios.delete(`/api/users/${id}`)
            const k=data.filter(d=>d._id!==da._id)
            setData(k);

            
        }

        const handleUpdate = async(data2)=>{
                const {data} = await axios.put('/api/users',data2)
                console.log("====================>",data);
                console.log(props.data);

                // const dp  = data.user;
                // console.log("------>",dp);
                // setData({dp});
        }
        return (<>
                <div className='container'>
                    <h1>ADMIN PAGE</h1>
                </div>
                
                
                <div className="container d-flex justify-content-end mt-4">
                    <div className="btn btn-lg"><Link to='/bannerchange'>Change Banner</Link></div>
                    <div className="ms-5 btn btn-lg"><Link to='/newuser'>Add new user/Admin</Link> </div>
                </div>

                <div className="container admin-details-container mt-5 h-50">
                    <div className="row ">
                    <div className="col-sm-3 ">
                            <div className="col-header">First Name</div>   
                             

                            {data && data.map(dat => (
                                <div className="col-data ada h-50" key={dat._id}>{dat.firstname}</div>
                                ))}


                        </div>
                        <div className="col-sm-3">
                        <div className="col-header">Last Name</div>  
                        {data && data.map(dat => (
                               
                                <div className="col-data ada h-50" key={dat._id}>{dat.lastname}</div>
                                ))}
                        </div>
                        <div className="col-sm-3">
                        <div className="col-header">Role</div>  
                        {data && data.map(dat => (
                                <div className="col-data ada  h-50" key={dat._id}>{dat.role}</div>
                                ))}
                        </div>
                        <div className="col-sm-1">
                        <div className="col-header ">re</div>  
                            {data && data.map(dat => (
                                <div className="col-data ada  text-center h-50" onClick={()=>handleDelete(dat)} key={dat._id}>Delete</div>
                                // <div className="btn ada d-block w-25  mt-4" key={dat.id} onClick={handleDelete} >Delete </div>
                                ))} 
                        </div>

                        <div className="col-sm-2">
                        <div className="col-header">Role</div>  
                        {/* <Link to={`/newuser/${dat._id}`}>    */}
                        
                        
                        {data && data.map(dat => (
                               <div className="col-data ada  h-50" onClick={()=>handleUpdate(dat)} key={dat._id}>Update</div>
                                ))} 
                                
                                
                                {/* </Link> */}
                        </div>

                    </div>

                    


                </div>

            </>
    );
}

export default AdminPage;