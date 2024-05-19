import React, { useState, useEffect } from 'react';
import './styles/ImageSlideshow.css';

const images = [
  `${process.env.PUBLIC_URL}/images/T-38_External_1.png`,
  `${process.env.PUBLIC_URL}/images/T-38_External_3.png`,
  `${process.env.PUBLIC_URL}/images/T-38_External_5.png`,
  `${process.env.PUBLIC_URL}/images/T-38_External_6.png`,
  `${process.env.PUBLIC_URL}/images/T-38_Cockpit_1.png`,
];

function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <button className="slideshow-button prev" onClick={goToPrevious}>❮</button>
      <img src={images[currentIndex]} alt="slideshow" className="slideshow-image" />
      <button className="slideshow-button next" onClick={goToNext}>❯</button>
    </div>
  );
}

export default ImageSlideshow;
