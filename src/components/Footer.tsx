import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoMark}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="5" stroke="white" strokeWidth="2" />
                  <circle cx="8" cy="8" r="2" fill="white" />
                </svg>
              </div>
              RECALL
            </Link>
            <p>Your conversations, remembered. A life-first journaling companion built for the moments that actually matter.</p>
          </div>
          <div>
            <div className={styles.colTitle}>Product</div>
            <ul className={styles.links}>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#how-it-works">How it works</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#privacy">Privacy</Link></li>
              <li><Link href="#">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <div className={styles.colTitle}>Use cases</div>
            <ul className={styles.links}>
              <li><Link href="#">Health & Care</Link></li>
              <li><Link href="#">Students</Link></li>
              <li><Link href="#">ADHD support</Link></li>
              <li><Link href="#">Professionals</Link></li>
              <li><Link href="#">Families</Link></li>
            </ul>
          </div>
          <div>
            <div className={styles.colTitle}>Company</div>
            <ul className={styles.links}>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 RECALL. All rights reserved. Made with love in India.</span>
          <span>Built for the moments that matter.</span>
        </div>
      </div>
    </footer>
  );
}
