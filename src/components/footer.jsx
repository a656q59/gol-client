import React from 'react';
import './footer.css';
import gol from '../assets/gol-logo-white 1.png';
import gplay from '../assets/google-play-png-logo-3789 1.png';
import circle from '../assets/Ellipse 10 (1).png';

function footer(props) {
    return (
        <div className='mt-5'>
            <div className=" container container-5 ">
                <div className="dowload-app-banner text-white p-5">
                    <div className="row">

                        <div className="col-md">
                            <h1 className='dowload-app-banner-text'>Download Our App</h1>
                            <h4 className='dowload-app-banner-text'>The best travel in the workd</h4>
                            <div className="dowload-app-banner-text btn dowload-app-banner-btn btn-lg text-start ms-2 d-flex p-3 "> 
                                <img src={gplay} alt="" />
                                <div className='ms-3'>
                                    <div className='dowload-app-banner-btn-text'>GET IT ON</div>
                                    <div className='dowload-app-banner-btn-text2'>Google Play</div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md something d-flex justify-content-end my-1">
                            <img src={circle} className=""alt="" />
                        </div>


                    </div>
                </div>
            </div>
            <div className="container-fluid text-white">
                <div className="items-list-container"> 
                    <div className="row">
                        <div className="col-md"><img src={gol} alt="" />
                            <div className=' mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>    
                        <div className="col-md">
                            <div className='company-title mb-4'>Company</div>
                            <div className="col-text">Events</div>
                            <div className="col-text">Blogs</div>
                            <div className="col-text">FAQ</div>
                            <div className="col-text">Join US</div>
                        </div>
                        <div className="col-md">
                        <div className='company-title mb-4'>Company</div>
                            <div className="col-text">Project</div>
                            <div className="col-text">Lorem</div>
                            <div className="col-text">Services</div>
                            <div className="col-text">Our Story</div>                    
                        </div>
                        <div className="col-md">
                        <div className='company-title mb-4'>Company</div>
                            <div className="col-text">abc@lorem.com</div>
                            <div className="col-text">India</div>
                        </div>

                    </div>
                    <hr id="footer-line"/>
                    <div className="copyright-container d-flex justify-content-center">
                        <div>Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.</div>
                    </div>
                </div>
               
            </div>
            
            
        </div>
    );
}

export default footer;