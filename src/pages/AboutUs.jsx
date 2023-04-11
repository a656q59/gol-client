import'./AboutUs.css'
import React from 'react';
import worldmap from '../assets/world_map_PNG28 3.png'
import founder from '../assets/Rectangle.png';
import persn1 from '../assets/Oval.png';
import persn2 from '../assets/Oval (1).png';
import persn3 from '../assets/Oval (2).png';
import persn4 from '../assets/Oval (3).png';
import persn5 from '../assets/Oval (4).png';
import rect35 from '../assets/Rectangle 35.png';
import video from '../assets/video.png'


function AboutUs(props) {
    return (<>
            <div className="container">
                <div className="imag-containe">
                    <img src={worldmap} alt="world map" className='world-map-image'/>
                    <div className='concentric-circle-container d-flex justify-content-center align-items-center'>
                        <div className="concentric-circle-text">About Us</div>
                        <div className="concentric-circle1"></div>
                    </div>
                </div>
            </div>

            <div className='container our-team-container text-center'>
                <div className='our-team-container-title'>Our Team</div>
                <div className='our-team-container-text'>Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platonem eos. </div>

            </div>
            <div className="container people-profile-container mt-5">
                <div className="row">
                    <div className="col-md-1 people-profile-list d-flex flex-column justify-content-center" id="people-profile-list1">
                        <img src={persn1} alt="" />
                        <img src={persn2} alt="" />
                        <img src={persn3} alt="" />
                        <img src={persn4} alt="" />
                        <img src={persn5} alt="" />
                    </div>
                    <div className="col-sm-6 people-profile-picture">
                        <img src={founder} alt="" />
                    </div>
                    <div className="col-sm-5 people-profile-text">
                        <div className="people-profile-text-name">Sebastian Bennett</div>
                        <div className="people-profile-text-designation">Founder, LEad Photographer, CEO</div>
                        <div className="people-profile-text-description">Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera integre suavitate per an, alienum phaedrum te sea. Ex sea causae dolores, nam et doming dicunt feugait. Ea mel scripta aperiri postulant. Ut sed affert audire.</div>
                    </div>
                </div>

            </div>


            <div className="customer-quotes-widget container mt-5  p-5">
                <div className="customer-quotes-widget-title"> What customer's are saying?</div>
                <div className='customer-quotes-widget-description'>Take a look at what our customer’s are saying. At Nature we not only provide you with services but also we provide you with valuable experiences for your valuable time.</div>
                <div className="customer-quotes-widget-image-container">
                    <div className="row container">
                        <div className="col col-lg-3  col-lg-img1"><img src={rect35} alt="" /></div>
                        <div className="col col-lg-3  col-lg-img2"><img src={rect35} alt="" /></div>
                        <div className="col col-lg-3  col-lg-img3"><img src={rect35} alt="" /></div>
                        <div className="col col-lg-3  col-lg-img4"><img src={rect35} alt="" /></div>
                    </div>
                    {/* <div className="add-something">adding something</div> */}

                </div>
            </div>

            <div className='container certificate-container text-center'>
                <div className="certificate-title">Certificate</div>
                <div className="certificate-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id turpis sodales, facilisis massa at, rutrum eros.</div>
                <div className="row mt-5">
                    <div className="col"><img src={video} alt="" /></div>
                    <div className="col pt-1"><img src={video} alt="" /></div>
                </div>
                <div className="row pt-5">
                    <div className="col"><img src={video} alt="" /></div>
                    <div className="col pt-1"><img src={video} alt="" /></div>
                </div>

            </div>

            </>
        
    );
}

export default AboutUs;