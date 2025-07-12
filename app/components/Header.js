'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image 
            src="/org_logo.png" 
            alt="Siddharth Constructions Logo" 
            width={64} 
            height={64}
            className={styles.logoImage}
          />
          {/* <div className={styles.logoText}>
            <h1>Siddharth Constructions</h1>
          </div> */}
        </Link>
    
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/founder" onClick={closeMenu}>Founder</Link>
          <Link href="/projects" onClick={closeMenu}>Projects</Link>
          <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link href="/contact" onClick={closeMenu} className={styles.contactLink}>Contact</Link>
        </nav>
        
        <button 
          className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}