import styles from './Privacy.module.css';

const points = [
  {
    icon: '🔒',
    title: 'On-device processing',
    desc: 'Your conversations are processed locally on your device. Audio never leaves without your permission.',
  },
  {
    icon: '🛡️',
    title: 'AES-256 encrypted storage',
    desc: 'Every journal entry is encrypted at rest with AES-256. Military-grade security for your memories.',
  },
  {
    icon: '✋',
    title: 'Consent-first recording',
    desc: 'RECALL never records without you explicitly starting it. You are always in control.',
  },
];

export default function Privacy() {
  return (
    <section className={styles.section} id="privacy">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Privacy by design</div>
          <h2 className={styles.h2}>Your memories. Your device.<br />Your control.</h2>
          <p className={styles.sub}>
            Privacy is not a feature we added later. It is the foundation RECALL is built on.
          </p>
        </div>
        <div className={styles.grid}>
          {points.map((p, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon}>{p.icon}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
