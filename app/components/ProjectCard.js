'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, showStatus = false, showCompletion = false }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const images = project.image || []

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  const handleDotClick = (index) => {
    setCurrentImageIndex(index)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    // Prevent scrolling when modal is open
    document.body.style.overflow = isModalOpen ? 'auto' : 'hidden'
  }

  return (
    <>
      <div className={styles.card} onClick={toggleModal}>
        <div className={styles.imageContainer}>
          <div className={styles.imageSlider}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.imageSlide} ${
                  index === currentImageIndex ? styles.active : ''
                }`}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          
          {images.length > 1 && (
            <div className={styles.indicators}>
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${
                    index === currentImageIndex ? styles.activeDot : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDotClick(index)
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {showStatus && (
            <span className={`${styles.status} ${styles[project.status]}`}>
              {project.status === 'upcoming' ? 'Upcoming' : 
               project.status === 'ongoing' ? 'In Progress' : 'Completed'}
            </span>
          )}
        </div>
        
        <div className={styles.content}>
          <h3>{project.title}</h3>
          <p className={styles.location}>{project.location}</p>
          <p className={styles.description}>{project.description}</p>
          
          {showCompletion && project.completion && (
            <div className={styles.completion}>
              <div className={styles.completionBar}>
                <div 
                  className={styles.completionFill}
                  style={{ width: project.completion }}
                ></div>
              </div>
              <span>{project.completion} complete</span>
            </div>
          )}
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={toggleModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={toggleModal}>
              &times;
            </button>
            
            <h2>{project.title}</h2>
            <p className={styles.modalLocation}>{project.location}</p>
            
            <div className={styles.modalImageSlider}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.modalImageSlide} ${
                    index === currentImageIndex ? styles.active : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    width={800}
                    height={500}
                    className={styles.modalImage}
                  />
                </div>
              ))}
              
              {images.length > 1 && (
                <div className={styles.modalIndicators}>
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.modalDot} ${
                        index === currentImageIndex ? styles.activeDot : ''
                      }`}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <div className={styles.modalDetails}>
              <div className={styles.modalDescription}>
                <h3>Project Description</h3>
                <p>{project.description}</p>
              </div>
              
              <div className={styles.modalFeatures}>
                <h3>Key Features</h3>
                <ul>
                  {project.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.modalSpecs}>
                <div className={styles.specItem}>
                  <h4>Project Type</h4>
                  <p>{project.details.type}</p>
                </div>
                
                {project.details.duration && (
                  <div className={styles.specItem}>
                    <h4>Duration</h4>
                    <p>{project.details.duration}</p>
                  </div>
                )}
                
                {project.details.year && (
                  <div className={styles.specItem}>
                    <h4>Completion Year</h4>
                    <p>{project.details.year}</p>
                  </div>
                )}
                
                <div className={styles.specItem}>
                  <h4>Status</h4>
                  <p className={`${styles.statusBadge} ${styles[project.status]}`}>
                    {project.status === 'upcoming' ? 'Upcoming' : 
                     project.status === 'ongoing' ? 'In Progress' : 'Completed'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}