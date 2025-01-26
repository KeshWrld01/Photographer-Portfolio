'use client';

import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="about-container ">
      {/* Hero Section */}
      <div className="box relative bg-transparent shadow-md rounded-lg p-6 mb-10 reveal-animation">

        <div className="flex items-center justify-center mb-6 ">
          <img
            src="/nikon.png"
            alt="Camera Lens"
            className="w-24 h-24 rounded-full shadow-lg object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-4 text-white">About Me</h2>
        <article className="text-black mb-4 cool-article">
          Hi, I’m Simon Wachira, the creative mind behind{' '}
          <strong className="text-black">Drey Pictures</strong>. I’m a passionate photographer who
          finds joy in capturing life’s most beautiful and authentic moments through the lens.
        </article>
      </div>
      <div className="background-lens">
        <img src="/nikon.png" alt="Camera Lens" className="camera-lens-image" />
      </div>

      {/* Boxes for Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal-animation">
        <div className="box bg-white shadow-md rounded-lg p-6 ">
          <h3 className="text-2xl font-semibold mb-3">My Mission</h3>
          <article className="text-black mb-4 cool-article">
          At Drey Pictures, my mission is to tell compelling stories through captivating images
            that evoke emotions, preserve memories, and celebrate life.
          </article>
        </div>

        <div className="box bg-white shadow-md rounded-lg p-6 reveal-animation">
          <h3 className="text-2xl font-semibold mb-3">My Journey</h3>
          <article className="text-black mb-4 cool-article">
          I started my photography journey with a small camera gifted to me during high school.
            What began as a hobby has grown into a passion for storytelling through images. Over the
            years, I’ve worked on various projects, from portraits to landscapes, and I continue to
            grow as an artist.
          </article>
        </div>

        <div className="box bg-white shadow-md rounded-lg p-6 reveal-animation">
          <h3 className="text-2xl font-semibold mb-3">Specialties</h3>
          <article className="text-black mb-4 cool-article">
          I specialize in portrait and landscape photography, focusing on creativity and
            authenticity. Whether it's capturing a serene sunset or a heartfelt moment, my goal is
            to make every image unforgettable.
          </article>
        </div>
      </div>
      <div className="cta-section" data-aos="fade-up">
          <h4>Ready to capture your memories?</h4>
          <p>Let’s work together and create beautiful moments!</p>
          <div className="cta-buttons">
            <a href="/Projects" className="cta-button">View Portfolio</a>
            <a href="/Contacts" className="cta-button">Contact Me</a>
            <a href="#book" className="cta-button">Book a Session</a>
          </div>
        </div>
    </div>
  );
};

export default About;
