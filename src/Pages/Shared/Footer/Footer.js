import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
    return (
        <div>
        <div className="footer-top">
           <div className="container-fluid">
               <div className="row">
                   <div className="col-xl-4 col-md-6 col-lg-4">
                       <div className="footer_widget">
                           
                           <h4>
                               AC Zone, <small className="inside-text">Delivery Within 7 days</small>
                           </h4>
                           <div className="social_links">
                               <ul className="no-bullets">
                                   <li>
                                       <Nav.Link href="#">
                                           <FontAwesomeIcon icon={faFacebook} size="2x" />
                                       </Nav.Link>
                                   </li>
                                   <li>
                                       <Nav.Link href="#">
                                           <FontAwesomeIcon icon={faTwitter} size="2x" />
                                       </Nav.Link>
                                   </li>
                                   <li>
                                       <Nav.Link href="#">
                                           <FontAwesomeIcon icon={faInstagram} size="2x"/>                              
                                       </Nav.Link>
                                   </li>
                               </ul>
                           </div>

                       </div>
                   </div>
                   <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                       <div className="footer_widget">
                           <h4 className="footer_title">
                               Useful Links
                           </h4>
                           <ul>
                               <li><Nav.Link href="#">Blog</Nav.Link></li>
                               <li><Nav.Link href="#">Register</Nav.Link></li>
                               <li><Nav.Link href="#">Login</Nav.Link></li>
                               
                           </ul>

                       </div>
                   </div>
                   <div className="col-xl-2 col-md-6 col-lg-2">
                       <div className="footer_widget">
                           <h4 className="footer_title">
                               Useful Links
                           </h4>
                           <ul>
                               <li><Nav.Link href="#">About</Nav.Link></li>
                               <li><Nav.Link href="#"> Contact</Nav.Link></li>
                               <li><Nav.Link href="#"> Review</Nav.Link></li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-xl-3 col-md-6 col-lg-3">
                       <div className="footer_widget">
                           <h4 className="footer_title">
                                   Address
                           </h4>
                           <p>
                               Mohammadpur, Dhaka, Bangladesh
                               +8801914149553,
                               onlinesale.ac@info.com
                           </p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div className="copy-right_text">
           <div className="container">
               <div className="footer_border"></div>
               <div className="row">
                   <div className="col-xl-12">
                       <p className="copy_right text-center">
                           
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | AC Zone<i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://aczone.com" target="blank">AC Zone</a>

                       </p>
                   </div>
               </div>
           </div>
       </div>
   </div>
    );
};

export default Footer;