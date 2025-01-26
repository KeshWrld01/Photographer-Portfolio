'use client';
import React, { useEffect, useState } from 'react';
import './globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF, faTiktok } from '@fortawesome/free-brands-svg-icons';
import 'aos/dist/aos.css';
// @ts-ignore
import AOS from 'aos';



const Page = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

    <main>
      {/* Background Camera Lens */}
      <div className="background-lens">
        <img src="/nikon.png" alt="Camera Lens" className="camera-lens-image" />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="text-content">
          <h1>Hi, I'm Kesh Wrld</h1>
          <p>
            A passionate photographer dedicated to capturing the beauty of the world
            through my lens. From breathtaking landscapes to intimate portraits,
            every shot tells a story worth sharing.
          </p>

          {/* Social Media Icons */}
          <div className="social-icons" data-aos="fade-left">
            <a href="https://www.instagram.com/yourusername" target="_blank" className="social-icon" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" className="social-icon" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/yourusername" target="_blank" className="social-icon" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.tiktok.com/@yourusername" target="_blank" className="social-icon" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="profile-card">
  <img
    src="/pic.png"
    alt="Simon Wachira"
    className="profile-pic"
  />
</div>
      </div>  
 
    </main>
   
  );
};

export default Page;
