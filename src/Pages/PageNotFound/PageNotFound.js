import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/404p.jpg';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div>
            <div>
                <img className="img2" src={img} alt=""/>
            </div>
            
            <button type="" className = "button-page"> 
                <NavLink to = "/home" className ="nav-link1">Back to Home Page</NavLink> 
            </button>
        </div>
    );
};

export default PageNotFound;