// components/TransitionBackground.js
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function TransitionBackground({ images, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setOpacity(1);
      }, 500); // Half-second fade duration
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="transition-container">
      <Image
        src={images[currentIndex]}
        alt="Background image"
        fill
        priority
        quality={80}
        style={{ 
          objectFit: 'cover',
          opacity,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
    </div>
  );
}