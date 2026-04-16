import styles from './CTA.module.css';

export default function CTA() {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>✦ Get started</div>
        <h2 className={styles.title}>Stop losing the conversations<br />that matter most</h2>
        <p className={styles.sub}>Join 2,400+ people who never want to leave a conversation wishing they&apos;d paid more attention.</p>
        <div className={styles.btns}>
          <a href="#" className={styles.storeBtn}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="white">
              <path d="M17.05 11.2c-.02-1.98 1.63-2.94 1.7-2.98-.93-1.36-2.37-1.54-2.88-1.56-1.22-.12-2.4.72-3.02.72-.63 0-1.58-.7-2.6-.68-1.33.02-2.57.78-3.25 1.97-1.4 2.42-.36 5.97.99 7.92.67.96 1.45 2.03 2.48 1.99 1-.04 1.38-.64 2.59-.64 1.2 0 1.55.64 2.6.62 1.08-.02 1.75-1.03 2.38-2 .76-1.14 1.07-2.25 1.09-2.31-.02-.01-2.1-.81-2.08-3.05zM15.15 5.56c.55-.67.93-1.6.82-2.53-.8.03-1.77.53-2.34 1.2-.51.59-.96 1.54-.84 2.44.88.07 1.79-.45 2.36-1.11z" />
            </svg>
            <div className={styles.sbt}>
              <span className={styles.sbtSub}>Download on the</span>
              <span className={styles.sbtName}>App Store</span>
            </div>
          </a>
          <a href="#" className={styles.storeBtn}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4.5 4L12.5 11L4.5 18V4Z" fill="#00E5FF" />
              <path d="M4.5 4L12.5 11L17 8.5L4.5 4Z" fill="#FFD740" />
              <path d="M12.5 11L17 13.5L4.5 18L12.5 11Z" fill="#FF6D00" />
              <path d="M17 8.5L12.5 11L17 13.5L17 8.5Z" fill="#FF4081" />
            </svg>
            <div className={styles.sbt}>
              <span className={styles.sbtSub}>Get it on</span>
              <span className={styles.sbtName}>Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
