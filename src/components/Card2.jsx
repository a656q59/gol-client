import React from 'react';
import'./Card2.css';
import star from '../assets/Star 1.png'
function Card2(props) {
    return (
        <>
            <img src={props.src} className=" card card-img-top mt-3" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Kavaratti is the capital of the Union Territory of Lakshadweep having ...</p>
                <div className='btn2-container d-flex align-items-center justify-content-between'>
                    <span> <img src={star} className="mb-1"alt="" /> 4.5 </span>                   
                    <span>(1.5k Review)</span>
                    <span className="btn d-inline px-3 me-1" >Explore More</span>
                </div>
            </div>
        </>
    );
}

export default Card2;