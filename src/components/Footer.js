import React from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = ()=>{
  return(
  <>
   <div className="footer_container">
     <div className="footer_subscriptions">
         <p className="footer_subscriptions_head"> Subscribe to our website for more amazing and beautiful rentals! </p>
         <p className="footer_subscriptions_para"> You can subscribe anytime if you want</p>
         <div className="inputs">
                <input className="input_field" type="text" placeholder="Write Something..." />
                <button className="mybtn">Subscribe</button>
         </div>
     </div>
     <div className="footer_links">
         <div className="footer_link_wrapper">
             <div className="footer_link_items">
                 <h3>About Us</h3>
                 <p>How it works</p>
                 <p>Testimonials</p>
                 <p>Careers</p>
             </div>
         </div>
         <div className="footer_link_wrapper">
             <div className="footer_link_items">
                 <h3>Contact Us</h3>
                 <p>Contact</p>
                 <p>Support</p>
                 <p>Sponsorships</p>
             </div>
         </div>
     </div>
     <div className="social_media">
         <div className="social_media_wrap">
             <div className="social_icons">
                 <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social_media_icon instagram"><FontAwesomeIcon icon={faInstagram}/></a>
                 <a href="https://facebook.com"  target="_blank" rel="noreferrer" className="social_media_icon facebook"><FontAwesomeIcon icon={faFacebook}/></a>
                 <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social_media_icon twitter"><FontAwesomeIcon icon={faTwitter}/></a>
             </div>
         </div>
     </div>
   </div>
  </>
  );
}

export default Footer;