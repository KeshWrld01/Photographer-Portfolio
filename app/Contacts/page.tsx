'use client'

import React from 'react';
import '../../app/components/Contact.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../../app/components/Contact.module.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
           <div className="background-lens">
        <img src="/nikon.png" alt="Camera Lens" className="camera-lens-image" />
      </div>
      <div className="contact-container">
        <div className="contact-image-container">
          <img src="/pic.png" alt="Contact Us" className="contact-image" />
        </div>
        <div className="contact-info-container">
          <div className="contact-banner">
            <h1 className="contact-title">Get in Touch</h1>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faLocationPin} className="contact-icon" />
              <div>
                <h4 className="contact-heading">Visit Us</h4>
                <p className="contact-details">153 Tudor Nora, Mombasa</p>
              </div>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
              <div>
                <h4 className="contact-heading">Call Us</h4>
                <p className="contact-details">+254 758785639</p>
              </div>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <div>
                <h4 className="contact-heading">Email Us</h4>
                <p className="contact-details">keshwrld910@gmail.com</p>
              </div>
            </div>
            
          </div>
        </div>
        <div className="contact-form">
  <h4>Contact Us</h4>
  <form>
    <div className="form-group">
      <label htmlFor="name color-blue">Your Name</label>
      <input type="text" id="name" placeholder="Enter your name" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Your Email</label>
      <input type="email" id="email" placeholder="Enter your email" required />
    </div>
    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea id="message" rows={5} placeholder="Enter your message" required></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
</div>

      </div>
    </div>
  );
}



