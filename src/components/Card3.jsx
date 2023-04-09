import React from 'react';
import './Card3.css';
import star3 from '../assets/Star 3.png';
function Card3(props) {
    return (
            <>  
                <div className='card text-center px-4'>
                    <div className="image-container d-flex justify-content-center">
                        <img src={props.src} className="  profile-img mt-3 " alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text-place">{props.place}</p>
                        <p className="card-text-blurb mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </p>
                        
                    </div>
                    <div className="review-stars-container d-flex justify-content-center">
                        <img src={star3} alt="star" className="review-stars" />
                        <img src={star3} alt="star" className="review-stars" />
                        <img src={star3} alt="star" className="review-stars" />
                        <img src={star3} alt="star" className="review-stars" />
                        <img src={star3} alt="star" className="review-stars" />
                    </div>

                </div>
            </>
    );
}

export default Card3;