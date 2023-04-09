import React from 'react';
import compass from '../assets/Vector (1).png'
import tourist from '../assets/Layer 1 1.png'
import worldmap from '../assets/world_map_PNG28 3.png';
import paperrocket from '../assets/paperrocket.png'
import './homepage2.css';
import indonesia from '../assets/indonesia.png'
import indonesia2 from '../assets/indonesia2.png'
import indonesia3 from '../assets/indonesia3.png'
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import train from '../assets/Frame 11.png';
import rectangle from '../assets/Rectangle 8 (1).png';
import rectangle1 from '../assets/Rectangle 9.png';

function homepage2(props) {
    return (
        <>
        <div className="container container-banner ">
            <div className="row ">
                <div className="col-md-4">
                    <div className='banner-btn-1'>Visit <img src={compass} alt="compass" /></div>
                    <div className="banner-text container1">
                        <div className="banner-text line-1">The Exotic</div>
                        <div className="banner-text line-2">Lakshadweep</div>
                        <div className="banner-text line-3">Islands</div>
                    </div>
                    <div className='banner-btn-2'>Discover Now</div>
                </div>
                <div className="col-md-8">
                    <div className='conte1' >
                        <img src={worldmap} className='img-move imge1' alt="" />
                        <img src={tourist}  className="img-move imge2" alt="" />
                        <img src={train}  className="img-move imge3" alt="" />
                        <img src={rectangle}  className="img-move imge4" alt="" />
                        <img src={rectangle1}  className="img-move imge4 imag1" alt="" />
                    </div>    
                </div>                
            </div>
        </div>

        <div className="container show-flight-widget ">
            <div className="show-flight-widget-text pt-3"> Where are you flying?</div>
                <form className="show-flight-widget-form container my-4">
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="from-to" className="form-label">From-To</label>
                            <input type="text"  className="form-control icon" id="from-to" placeholder='Lahore-Karachi'/>                               
                        </div>
                        <div className="col-md -3">
                                <label htmlFor="return" className="form-label">Trip</label>
                                <input type="email"  className="form-control down-icon" id="return" placeholder='Return'/>                               
                        </div>
                        <div className="col-md -3">
                                <label htmlFor="return" className="form-label">Depart-Return</label>
                                <input type="email"  className="form-control " id="return" placeholder='07 Nov 22 - 13 Nov 22'/>   
                        </div>
                        <div className="col-md -3">
                            <label htmlFor="return" className="form-label">Passenger-Class</label>
                            <input type="email"  className="form-control " id="return" placeholder='1 Passenger, Economy'/>   
                            <div className="py-4">
                                <span >+ Add Promo Code</span>
                                <span><div style={{background:"#3282AD"}} className='btn btn-primary ms-2 '><img src={paperrocket} alt="paperrocket icon" /> Show Flights</div></span>
                            </div>
                        </div>

                    </div>
                </form>
        </div>

        <div className="container packages-container ">
            <div className="packages-container-text-header py-3">Best Packages For You</div>
                <div className="packages-container-text-subTitle text-center pb-5"> This is a unique experience on ship and land, exploring different coral islands of Lakshadweep</div>
                <div className="container packages-selector-widget">
                <div className="row">
                    <div className="col-md widget-1 text-white">
                        Maldives
                    </div>
                    <div className="col-md">
                        Samudram
                    </div>
                    <div className="col-md">
                        Cordelia
                    </div>
                    <div className="col-md">
                        Agatti
                    </div>
                    <div className="col-md widget-5 ">
                        More
                    </div>
                </div>   
            </div>

            <div className="container tour-package-card-list pt-5">
               <div className="row">
                    <div className="col-md-4">
                        <Card1 src={indonesia} title="Indonesia"/>
                    </div>
                    <div className="col-md-4">
                        <Card1 src={indonesia2} title="Indonesia"/>
                    </div>
                    <div className="col-md-4">
                        <Card1 src={indonesia3} title="Indonesia"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container packages-container ">
            <div className="packages-container-text-header py-3">Island Stays</div>
            <div className="packages-container-text-subTitle text-center pb-5"> One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.</div>


            <div className="container tour-package-card-list pt-5">
               <div className="row">
                    <div className="col-md-4">
                        <Card2 src={indonesia} title="Kavaratti"/>
                    </div>
                    <div className="col-md-4">
                        <Card2 src={indonesia2} title="Kavaratti"/>
                    </div>
                    <div className="col-md-4">
                        <Card2 src={indonesia3} title="Kavaratti"/>
                    </div>
                    <div className="col-md-4">
                        <Card2 src={indonesia} title="Kavaratti"/>
                    </div>
                    <div className="col-md-4">
                        <Card2 src={indonesia2} title="Kavaratti"/>
                    </div>
                    <div className="col-md-4">
                        <Card2 src={indonesia3} title="Kavaratti"/>
                    </div>
                </div>
            </div>
        </div>

        <div className='contact-us-banner container '>
            <div className='row'>
                <div className="contact-us-banner-text-content col-md">
                    <div className="contact-us-banner-title">Let’s Ready to Explore The World With Us.</div>
                    <div className="contact-us-banner-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </div>
                </div>
                <div className="contact-us-button col-md d-flex justify-content-end align-items-center">
                    <div className="btn btn3 btn-lg text-black">Contact Us</div>
                </div>
            </div>
        </div>

        <div className="container client-reviews-container">
            <div className="packages-container-text-header pt-5">What Our Client Says </div>
            <div className="packages-container-text-header mb-5">About Us </div>
            <div className="row ">
                <div className="col-md"><Card3 name='Roman Rey' place='Toranto, Canada' src={indonesia3} title="Kavaratti"/></div>
                <div className="col-md"><Card3 name='Alex Tom' place='Toranto, Canada' src={indonesia3} title="Kavaratti"/></div>
                <div className="col-md"><Card3 name='Finn Balor' place='Toranto, Canada' src={indonesia3} title="Kavaratti"/></div>
            </div>
        </div>

        
        </>
    );
}

export default homepage2;