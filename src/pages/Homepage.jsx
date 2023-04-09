import React from 'react';
import compass from '../assets/Vector (1).png'
import './Homepage.css';
import img1 from '../assets/Layer 1 1.png'
import img2 from '../assets/world_map_PNG28 3.png';

function Homepage(props) {
    return (
        <>
        <div class="main">
            <div className="banner d-flex flex-row">


                <div className="banner-content-left ">
                    <div className='banner-btn-1'>Visit <img src={compass} alt="compass" /></div>
                    <div className="banner-text container1">
                        <div className="banner-text line-1">The Exotic</div>
                        <div className="banner-text line-2">Lakshadweep</div>
                        <div className="banner-text line-3">Islands</div>
                    </div>
                    <div className='banner-btn-2'>Discover Now</div>
                </div>


                <div className="banner-content-right  ">
                    {/* <span className="world-map-image"></span> */} 
                    {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur soluta accusantium laborum ea facere atque voluptate, eius cumque, voluptatem ex voluptates in beatae sit aliquid dolores magnam? Tenetur, nisi!</h1> */}
                    <img src={img1} alt="" className='tourist-img' />                  
                    <img src={img2} className='world-map' alt="" /> 
                    
                </div>
                
            </div>
        </div>

        <div>
            where are you flying?
        </div>

        
        </>
    );
}

export default Homepage;