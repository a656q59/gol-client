import React from 'react';
import searchIcon from '../assets/Vector (7).png'
import './FancyButton.css';
import searchiconcircle from '../assets/Rectangle 17 (1).png';

function FancyButton(props) {
    return (
        // borderRadius:"19px"
        <div>
            <div className="input-group mt-5">
                <input type="text" className="form-control fancy-button-input " placeholder="      Type a destination" style={{height:"1.2cm", width:"10cm", }}/>  
                <span className="input-group-text fancy-button-icon" id="basic-addon1"><img src={searchIcon} alt="" /></span>                       
            </div>
        </div>
    );
}

export default FancyButton;