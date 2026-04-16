import styles from './Privacy.module.css';

const privacyFeatures = [
  {
    title: "On-device private mode",
    desc: "Process everything locally using Whisper on your phone. Nothing leaves your device.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L4 5.5v4c0 3.9 2.9 7.5 7 8.6 4.1-1.1 7-4.7 7-8.6v-4L11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 11l2 2.5 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "AES-256 encrypted storage",
    desc: "Your audio is encrypted at rest and in transit with TLS 1.3. Always.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="10" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10V7a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="15" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Consent-first design",
    desc: "No passive always-on recording. You actively start every session. Your consent, your rules.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="15" r="1.5" fill="currentColor" />
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: "GDPR & IT Act compliant",
    desc: "Built from the ground up for global and Indian data privacy standards.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

export default function Privacy() {
  return (
    <div id="privacy" className={styles.section}>
      <div className={styles.box}>
        <div>
          <div className={styles.label}>✦ Privacy</div>
          <h2 className={styles.title}>Your memories are<br />yours. Full stop.</h2>
          <p className={styles.sub}>
            We built RECALL with privacy as a first principle, not an afterthought. 
            Every decision was made with your most sensitive conversations in mind.
          </p>
        </div>
        <div className={styles.features}>
          {privacyFeatures.map((feat, i) => (
            <div key={i} className={styles.feature}>
              <div className={styles.icon}>{feat.icon}</div>
              <div>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
