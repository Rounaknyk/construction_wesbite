'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ProjectCard from './components/ProjectCard'
import styles from './page.module.css'
import {featuredProjects} from './constants/projects'
import { projectsCompleted, yearsOfExperience, teamMembers } from './constants/basic'
import Counter from './components/Counter'

export default function Home() {
  const [heroBgIndex, setHeroBgIndex] = useState(0)
  const [servicesBgIndex, setServicesBgIndex] = useState(0)
  
  const heroBgImages = [
    'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Goa beach
    'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80', // Palm trees
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1968&q=80', // Goa sunset
  ]
  
  const servicesBgImages = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80', // Beach with palms
    'https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Forest view
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80', // Nature path
  ]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroBgIndex((prev) => (prev + 1) % heroBgImages.length)
    }, 5000)
    
    const servicesInterval = setInterval(() => {
      setServicesBgIndex((prev) => (prev + 1) % servicesBgImages.length)
    }, 6000)
    
    return () => {
      clearInterval(heroInterval)
      clearInterval(servicesInterval)
    }
  }, [])

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Background Image Layers */}
        <div className={styles.heroBackground}>
          {heroBgImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.heroBgLayer} ${index === heroBgIndex ? styles.active : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Siddharth</h1>
          <h1>Constructions</h1>
          <p className={styles.tagline}>Building Tomorrow, Today</p>
          <p className={styles.description}>
            We are a leading construction company committed to delivering exceptional quality 
            and innovative solutions for residential and commercial projects in Goa.
          </p>
          <div className={styles.cta}>
            <Link href="/projects/" className="btn">
              View Our Projects
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className={styles.servicesSection}
        style={{ backgroundImage: `url(${servicesBgImages[servicesBgIndex]})` }}
      >
        <div className={styles.servicesOverlay}></div>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>
            We provide comprehensive construction services with a focus on quality, safety, and timely delivery.
          </p>
          
          <div className={styles.services}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🏠</div>
              <h3>Residential Construction</h3>
              <p>Custom homes, apartments, and residential complexes built to your specifications.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🏢</div>
              <h3>Commercial Buildings</h3>
              <p>Office buildings, retail spaces, and commercial complexes designed for business success.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Renovations</h3>
              <p>Transform existing spaces with our expert renovation and remodeling services.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📋</div>
              <h3>Project Management</h3>
              <p>End-to-end project management ensuring timely completion and quality assurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={`section ${styles.featuredProjects}`}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Take a look at some of our current and upcoming construction projects.
          </p>
          
          <div className="grid grid-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} showStatus />
            ))}
          </div>
          
          <div className={styles.projectsCta}>
            <Link href="/projects/" className="btn">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

{/* Video section */}

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


 {/* Stats Section */}
<section className={`section ${styles.stats}`}>
  <div className="container">
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <h3><Counter value={projectsCompleted-1} duration={600} /></h3>
        <p>Projects Completed</p>
      </div>
      <div className={styles.statCard}>
        <h3><Counter value={yearsOfExperience} duration={600} /></h3>
        <p>Years Experience</p>
      </div>
      <div className={styles.statCard}>
        <h3><Counter value={teamMembers-1} duration={600} /></h3>
        <p>Expert Team Members</p>
      </div>
      <div className={styles.statCard}>
        <h3><Counter value={100} duration={1500} /></h3>
        <p>Client Satisfaction</p>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Start constructing your vision with us today.</h2>
          <p>Let's discuss your construction needs and bring your vision to life.</p>
          <Link href="/contact" className="btn">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}