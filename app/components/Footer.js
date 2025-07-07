import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Siddharth Construction</h3>
            <p>Building dreams with quality and precision since 2018.</p>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/projects/upcoming">Projects</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul>
              <li>Residential Construction</li>
              <li>Commercial Buildings</li>
              <li>Renovations</li>
              <li>Project Management</li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <p>📍 123 Construction Ave, Building City, BC 12345</p>
            <p>📞 (555) 123-4567</p>
            <p>✉️ info@buildmaster.com</p>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Siddharth Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
