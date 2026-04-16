'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <Link href="/" className={styles.logo}>
        <div className={styles.logoMark}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="5" stroke="white" strokeWidth="2" />
            <circle cx="8" cy="8" r="2" fill="white" />
          </svg>
        </div>
        RECALL
      </Link>
      
      <ul className={styles.links}>
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#how-it-works">How it works</Link></li>
        <li><Link href="#pricing">Pricing</Link></li>
        <li><Link href="#privacy">Privacy</Link></li>
      </ul>
      
      <div className={styles.actions}>
        <Link href="#" className={`${styles.btn} styles.btnGhost`}>Log in</Link>
        <Link href="#waitlist" className={`${styles.btn} ${styles.btnPrimary}`}>Join Waitlist →</Link>
      </div>

    </nav>
  );
}
