import'./Packages.css';
import React from 'react';
import Maldives from '../assets/Rectangle 4183.png';
import Button from '../components/Button';
import DescriptionBox from '../components/descriptionBox';
import DescriptionBox2 from '../components/descriptionBox2';
import CustomButton from '../components/CustomButton';
import phoneIcon from '../assets/Vector (5).png';
import mailIcon from '../assets/Vector (6).png';
import searchIcon from '../assets/Vector (7).png'
import TemplateBox from '../components/TemplateBox';
import worldmap from '../assets/world_map_PNG28 3.png';
import FancyButton from '../components/FancyButton';


function Packages(props) {
    const text="On arrival at the Maldives International airport you will be met by the resort's airport representative and will be transferred to Vivanta By Taj Coral Reef by a speedboat ( shared basis ) . Afternoon free for relaxation . Overnight stay at the resort .";
    const text1='4 Nights’ accommodation in selected room category';
    const text2 ='Meal Plan: Full Board (Breakfast, Lunch & Dinner)'
    const text3='Dolphin Watching Tour with Lunch, Water & Soft Drinks';
    const text4='Snorkelling Gear & Photography';
    const text5='In-Room 500ml Bottled Mineral Water Per Day';
    const text8='Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.';
    return (
        <>           
                    <div className="container ">
                        <div className='container-w d-flex flex-column align-items-center justify-content-center'>
                            <div className="text-and-search  d-flex flex-column justify-content-around text-center mt-5">
                                <div className="concentric-circle-text">Maldives</div>
                                <FancyButton/></div>
                                <div className="world-map-container">
                                
                            </div>
                        </div>
                    </div>



            <div className="container package-details-container">
                <div className="row">
                    <div className="col-md-7 ">
                        <div className="overview-sub-nav-bar d-flex justify-content-start">
                            <div className="overview-sub-nav-bar-item">OVERVIEW</div>
                            <div className="overview-sub-nav-bar-item">ITINERARY</div>
                            <div className="overview-sub-nav-bar-item">ADDITIONAL INFO</div>
                        </div> 
                        <img src={Maldives} className="package-profile-img mt-4" alt="" />
                        <div className="package-description mt-4">
                            <div className="package-description-title">Package Overview</div>
                            <div className="package-description-text">Experience World-class Service at Kandima Maldives - Escape the ordinary Located on the largest island in Dhaalu Atoll, Kandima Maldives has the longest outdoor swimming pool in the Maldives, an abundance of water-sports, the largest beach club and tennis and basketball courts. It offers a marine biology centre, an art studio and cooking classes. Located at a 30-minute flight from Male’ and followed by a 20-minute boat ride to the island, the resort offers studios and villas with a private terrace and private pool. They offer endless tropical views. For fitness lovers, Kandima Maldives has a gym with personal trainers and provides classes like anti-gravity yoga, Zumba, aqua-bike classes and POUND® fitness lessons. Guests can hire bikes or electric scooters. Guests can choose among the 10 restaurants and bars the property offers. Sea Dragon serves authentic Chinese cuisine while Forbidden Bar plays live music in the night. Start the day at Aroma with fresh beverages and baked goods.For total relaxation, choose from massages, facials and a range of Signature local treatments. The Kandima Kids Club is run by a multilingual team of certified child care-givers. We speak your language! Kandima Maldives - Escape the ordinary...</div>
                            <hr className='package-description-text-line' />                                                            
                        </div>
                        
                    </div>
                    
                    <div className="col-md-1"></div>
                    <div className='col-md-4'>
                        <div className="starting-from-box d-flex justify-content-center py-4">
                            <span>Starting From <div className="start-value d-inline">50,999</div></span>
                        </div> 
                        <div className="mem-holiday-notification text-center">
                            <div className="mem-holiday-notification-title">Want to Go For A Memorable Holiday?</div>
                            <div className="mem-holiday-notification-text">Provide Your Details to Know Best Holiday Deals</div>
                        </div>  
                        <div className='form-container px-3'>
                            <form action="">
                                <label htmlFor="packagename" className="form-label">Package Name</label>
                                <input type="name" className="form-control" id="packagename" placeholder='Explore Maldives' />
                                <label htmlFor="departure" className="form-label mt-2">City of Departure</label>
                                <input type="name" className="form-control" id="departure" placeholder='Bangalore' />
                                <label htmlFor="departure date" className="form-label mt-2">Date of Departure</label>
                                <input type="name" className="form-control" id="departure date" placeholder='Date of Depature' disabled />
                                <div className="adult-child-container  mt-2 d-flex justify-content-between ">
                                    <div className="adult-button"> Adult <CustomButton/></div>
                                    <div className="child-button"> Child <CustomButton/></div>
                                </div>
                                <div className="contact-details-container mt-3">
                                    <div className="contact-details-heading-container ">
                                        <div className="row d-flex flex-row jusitfy-content-center align-items-center">
                                            <div className="col-md-5 ">Contact Details</div>
                                            <div className="col-md-7 pe-5"><span><hr id="contact-details-header "/></span></div>
                                        </div>
                                         
                                    </div>
                                    <div className="contact-details-form">
                                        <label htmlFor="name" className="form-label"></label>
                                        <input type="text" className="form-control" id="name" placeholder='Your Name' />
                                        <label htmlFor="email" className="form-label"></label>
                                        <input type="email" className="form-control" id="email" placeholder='Your Email Address' />
                                        <label htmlFor="email" className="form-label"></label>
                                        <div className="row">
                                            <div className="col-md-4"><input type="email" className="form-control w-75" id="email" placeholder='+91' /></div>
                                            <div className="col-md-8"><input type="email" className="form-control w-100" id="email" placeholder='Mobile No.' /></div>   
                                        </div>
                                        <button type="button" class="btn btn-outline-dark mt-4">Send Query</button>
                                        
                                    </div>
                                    <div className="or-container">
                                        <div className="row d-flex  align-items-center ">
                                            <div className="col-md-5"><hr /></div>
                                            <div className="col-md-1 px-0 pe-3  ">OR</div>
                                            <div className="col-md-6"><hr /></div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-outline-dark mt-4 w-100 ">Book Now</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="itineary-container container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="itineary-container-title">Day Wise Itineary</div>
                            <div className="itineary-day-wise-container mt-5">
                                <div className="row">                               
                                    <div className="col-md-4"><Button text="Day 1"/></div>
                                    <div className="col-md-8"><DescriptionBox title="ARRIVAL AT MALDIVES" text={text}/></div>
                                </div>
                                <div className="row">                               
                                    <div className="col-md-4"><Button text="Day 2"/></div>
                                    <div className="col-md-8"><DescriptionBox title="MALDIVES" text={text}/></div>
                                </div>
                                <div className="row">                               
                                    <div className="col-md-4"><Button text="Day 3"/></div>
                                    <div className="col-md-8"><DescriptionBox title="DEPARTURE FROM MALDIVES" text={text}/></div>
                                </div>
                            </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <div className="need-help-container">
                            <div className='need-help-Header text-center mb-4'>Need Help?</div>
                                <div className="need-help-text text-left">
                                    <div >
                                        <img src={phoneIcon} className='me-3 ms-5 mb-2' alt="phoneIcon" />
                                        <span className='text'>91-8474846846</span> 
                                    </div>
                                    <div>
                                        <img src={mailIcon} alt="mailIcon" className='me-3 ms-5' /> 
                                        <span className='text'> sara.cruz@example.com</span>
                                    </div>
                                </div>
                        </div>

                        <div className="faq-container">
                            <div className="faq-header"></div>
                            <label htmlFor="Search " className="form-label "></label>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search a question"/>  
                                <span className="input-group-text" id="basic-addon1"><img src={searchIcon} alt="" /></span>                       
                            </div>
                        </div>
                        <TemplateBox title='Try using our templates!' id='1'text={text8}/>
                        <TemplateBox title='Try using our templates!' id='2' text={text8}/>
                        <TemplateBox title='Try using our templates!' id='3' text={text8}/>
                        <TemplateBox title='Try using our templates!'id='4'  text={text8}/>
                    
                    </div>
                </div>
                <hr id="itineary-container-end-line"/>
                <div className="additional-info-container container mb-5">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="additional-info-title">Additional Information</div>
                            <div className="additional-info-text">
                                <DescriptionBox2 title='INCLUSIONS' text1={text1} text2={text2} text3={text3} text4={text4} text5={text5}/>
                                <DescriptionBox2 title='EXCLUSIONS' text1={text1} text2={text2} text3={text3} text4={text4} text5={text5}/>
                            </div>
                        </div>
                    </div>
                </div>
               
                
            </div>


        </>
    );
}

export default Packages;