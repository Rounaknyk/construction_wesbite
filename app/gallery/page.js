'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { allProjects } from '../constants/projects'
import { useSearchParams } from 'next/navigation'

export default function Gallery() {
  const searchParams = useSearchParams()
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    // Check for project ID in URL when component mounts
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