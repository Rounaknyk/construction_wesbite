'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    alt: 'Commercial building construction',
    category: 'Commercial'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    alt: 'Residential complex',
    category: 'Residential'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop',
    alt: 'Hospital construction',
    category: 'Healthcare'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
    alt: 'Office building interior',
    category: 'Commercial'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop',
    alt: 'Construction team working',
    category: 'Team'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    alt: 'Modern house construction',
    category: 'Residential'
  },
]

const categories = ['Gallery Photos']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Gallery Photos')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = selectedCategory === 'Gallery Photos'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <div className={styles.galleryPage}>
      <div className="container">
        <section className={styles.hero}>
          <h1>Project Gallery</h1>
          <p>Explore our portfolio of completed projects, construction progress, and company milestones.</p>
        </section>

        <section className={styles.galleryControls}>
          <div className={styles.categoryFilter}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className={styles.galleryGrid}>
          {filteredImages.map(image => (
            <div
              key={image.id}
              className={styles.galleryItem}
              onClick={() => openLightbox(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className={styles.galleryImage}
              />
              <div className={styles.imageOverlay}>
                <p>{image.alt}</p>
              </div>
            </div>
          ))}
        </section>

        {selectedImage && (
          <div className={styles.lightbox} onClick={closeLightbox}>
            <div className={styles.lightboxContent}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className={styles.lightboxImage}
              />
              <p className={styles.lightboxCaption}>{selectedImage.alt}</p>
              <button
                className={styles.closeButton}
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
