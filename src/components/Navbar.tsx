import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>◉</span>
          RECALL
        </a>
        <div className={styles.links}>
          <a href="#capture">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#privacy">Privacy</a>
        </div>
        <a href="#waitlist" className={styles.cta}>Join Waitlist</a>
      </div>
    </nav>
  );
}
