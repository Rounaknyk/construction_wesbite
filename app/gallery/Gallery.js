'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import styles from './Gallery.module.css'
import { allProjects } from '../constants/projects'
import { useSearchParams } from 'next/navigation'
import {gallery} from '../constants/projects'

export default function Gallery() {
  const searchParams = useSearchParams()
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto slide functionality
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  useEffect(() => {
    const projectId = searchParams.get('project')
    if (projectId) {
      const project = allProjects.find(p => p.id.toString() === projectId)
      if (project) setSelectedProject(project)
    } else if (allProjects.length > 0) {
      setSelectedProject(allProjects[0])
    }
  }, [searchParams])

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
          <p>Explore photos from our construction projects</p>
        </section>


<section className={styles.videoSection}>
  <h2>Our Videos</h2>
  <div className={styles.videoGrid}>
    <div className={styles.videoItem}>
      <iframe
        src="https://www.youtube.com/embed/EC33Maj2T9E"
        title="YouTube video 1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className={styles.videoItem}>
      <iframe
        src="https://www.youtube.com/embed/th_ejWk0uf8"
        title="YouTube video 2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    {/* Add more video blocks as needed */}
  </div>
</section>

        {/* Add this Slider section */}
    <section className={styles.sliderSection}>
  <div className={styles.sliderContainer}>
    {gallery.map((image, index) => (
      <div 
        key={index}
        className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
      >
        <Image
          src={image.image}
          alt={`Slider image ${index + 1}`}
          fill
          className={styles.slideImage}
          priority={index === 0} // Only preload first image
        />
        <div className={styles.slideOverlay}></div>
      </div>
    ))}
    <button className={styles.sliderArrowLeft} onClick={prevSlide}>
      &lt;
    </button>
    <button className={styles.sliderArrowRight} onClick={nextSlide}>
      &gt;
    </button>
    <div className={styles.sliderDots}>
      {gallery.map((_, index) => (
        <button
          key={index}
          className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
  </div>
</section>


        <section className={styles.projectTabs}>
          {allProjects.map(project => (
            <button
              key={project.id}
              className={`${styles.projectTab} ${selectedProject?.id === project.id ? styles.active : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </button>
          ))}
        </section>

        {selectedProject && (
          <section className={styles.galleryGrid}>
            {selectedProject.gallery.map(image => (
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
        )}

        {selectedImage && (
          <div className={styles.lightbox} onClick={closeLightbox}>
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
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