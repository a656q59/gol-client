import React from 'react';
import { Link } from 'react-router-dom';
import gol from '../assets/gol-logo 1.jpg'
import './navbar.css';

function navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg  p-4 ">
  <div className="container-fluid">
    <Link className="navbar-brand me-5" to="/"><img src={gol} style={{background:"blue"}}alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m3-5 " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link" to="/">Find Reservations</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/packages">Packages</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/">About Laskshadweep</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/">Gol</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/">Support</Link>
        </li>
        
       
       </ul>    
        <span className="nav-item ">
            <Link  className="nav-link" to="/login">Login</Link>
        </span>
        <span style={{backgroundColor:'#056499',borderRadius:'20px' }}className="btn btn-primary nav-item px-3 py-2 mx-3">
            <Link  className="nav-link" to="/signup">Sign Up</Link>
        </span>
    </div>
  </div>
</nav>
    );
}

export default navbar;