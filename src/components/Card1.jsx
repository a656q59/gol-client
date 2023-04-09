import React from 'react';
import './Card1.css';

function Card1(props) {
    return (<>
                <img src={props.src} className=" card card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">Explore the Beauty of the island for 3days and 2 nights with our travel agency...</p>
                                <div className='btn-container d-flex justify-content-center'>
                                    <div className="btn btn1 " >Book Now</div>
                                </div>
                            </div>
            </>
    );
}

export default Card1;