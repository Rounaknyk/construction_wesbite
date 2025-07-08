'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Siddharth Constructions Logo" width={48} height={48} />
          <h1>Siddharth Constructions</h1>
        </Link>
    
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/about">About Company</Link>
          <Link href="/founder">About Founder</Link>
          <Link href="/projects">Projects</Link> {/* New tab for all projects */}
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        
        <button 
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}