'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import styles from '../../components/Gallery.module.css';

// Define the structure of the images
type Image = {
  src: string;
  alt: string;
};

// Define the structure of the categories
const categoryImages: Record<string, Image[]> = {
  retouch: [
    { src: '/pic.png', alt: 'Retouch Photo 1' },
    { src: '/nikon.png', alt: 'Retouch Photo 2' },
  ],
  bnb: [
    { src: '/bnb1.png', alt: 'BNB Photo 1' },
    { src: '/bnb2.png', alt: 'BNB Photo 2' },
  ],
  // Add more categories as needed
};

const CategoryGallery: React.FC = () => {
  const params = useParams();
  const category = params?.category; // Ensure category is defined

  // State for modal visibility and the selected image
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  if (!category || !categoryImages[category as string]) {
    return (
      <div className={styles.errorContainer}>
        <h2 className={styles.errorMessage}>Category not found!</h2>
      </div>
    );
  }

  const images = categoryImages[category as string];

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryTitle}>{category} Gallery</h2>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => openModal(image)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Modal for clear image view */}
      {selectedImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryGallery;
