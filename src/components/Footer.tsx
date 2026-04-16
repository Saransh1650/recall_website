import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>◉ RECALL</span>
          <p className={styles.tagline}>Your memory, beautifully organized.</p>
        </div>
        <div className={styles.links}>
          <a href="#privacy">Privacy</a>
          <a href="#pricing">Pricing</a>
          <a href="mailto:hello@recall.app">Contact</a>
        </div>
        <p className={styles.copy}>© 2025 RECALL. All rights reserved.</p>
      </div>
    </footer>
  );
}
