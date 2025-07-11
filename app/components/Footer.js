import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Siddharth Constructions</h3>
            <p>Building dreams with quality and precision since 2018.</p>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/projects">Projects</Link></li>
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
            <p>📍 Address: 102, First floor, Prime Elite Building, Near Hotel Urvashi, Vasco da Gama, Goa- 403802</p>
            <p>📞 (+91) 8805763609</p>
            <p>✉️ siddharthconstructions01@gmail.com</p>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; Siddharth Constructions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
