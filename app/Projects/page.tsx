'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../components/Projects.module.css';

const galleryImages = [
  { src: '/nikon.png', alt: 'Photo 1', title: 'Retouch', category: 'retouch' },
  { src: '/pic.png', alt: 'Photo 2', title: 'BNB', category: 'bnb' },
  { src: '/nikon.png', alt: 'Photo 3', title: 'Product/Removal', category: 'product-removal' },
  { src: '/pic.png', alt: 'Photo 4', title: 'Color Change', category: 'color-change' },
  { src: '/nikon.png', alt: 'Photo 5', title: 'Sports', category: 'sports' },
  { src: '/pic.png', alt: 'Photo 6', title: 'Weddings', category: 'weddings' },
  { src: '/nikon.png', alt: 'Photo 7', title: 'Nature', category: 'nature' },
];


const Projects = () => {
  const router = useRouter();

  const handleImageClick = (category: string) => {
    router.push(`/Projects/${category}`); // Navigate to dynamic gallery page
  };

  return (
    <div className={styles.galleryContainer}>
            <div className="background-lens">
        <img src="/nikon.png" alt="Camera Lens" className="camera-lens-image" />
      </div>
      <h2 className={styles.galleryTitle}>My Projects</h2>
      <div className={styles.galleryGrid}>
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => handleImageClick(image.category)} // Add click handler
          >
            <img src={image.src} alt={image.alt} />
            <div className={styles.galleryOverlay}>
              <p className={styles.overlayText}>{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

