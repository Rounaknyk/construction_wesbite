import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from './components/ProjectCard'
import styles from './page.module.css'
import {featuredProjects} from './constants/projects'
import { projectsCompleted, yearsOfExperience, teamMembers } from './constants/basic'

export default function Home() {
  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Siddharth Constructions</h1>
          <p className={styles.tagline}>Building Tomorrow, Today</p>
          <p className={styles.description}>
            We are a leading construction company committed to delivering exceptional quality 
            and innovative solutions for residential and commercial projects.
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
        <div className={styles.heroImage}>
          <Image
            src="https://images.unsplash.com/photo-1541976590-713941681591?w=600&h=400&fit=crop"
            alt="Construction site"
            width={600}
            height={400}
            priority
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
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
              <h3>{projectsCompleted-1}+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statCard}>
              <h3>{yearsOfExperience}+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statCard}>
              <h3>{teamMembers-1}+</h3>
              <p>Expert Team Members</p>
            </div>
            <div className={styles.statCard}>
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss your construction needs and bring your vision to life.</p>
          <Link href="/contact" className="btn">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}