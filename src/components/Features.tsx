import styles from './Features.module.css';

const features = [
  {
    title: "One-tap recording",
    desc: "Hit record, pocket your phone. RECALL captures everything in the background — even when your screen is locked. Noise suppression, silence detection, and a live timer in your notification bar.",
    color: styles.cardOrange,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="9" y="3" width="10" height="16" rx="5" fill="#F06A2E"/>
        <path d="M5 14a9 9 0 0018 0" stroke="#F06A2E" strokeWidth="2" strokeLinecap="round"/>
        <line x1="14" y1="23" x2="14" y2="26" stroke="#F06A2E" strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="26" x2="18" y2="26" stroke="#F06A2E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Beautiful AI journal entries",
    desc: "Not just a transcript — RECALL writes a proper journal entry. Key points, decisions made, action items, quotes worth keeping, and even the emotional tone of the conversation.",
    color: styles.cardPurple,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="3" width="20" height="25" rx="4" stroke="#7C5CFC" strokeWidth="2"/>
        <line x1="9" y1="11" x2="19" y2="11" stroke="#7C5CFC" strokeWidth="1.75" strokeLinecap="round"/>
        <line x1="9" y1="16" x2="19" y2="16" stroke="#7C5CFC" strokeWidth="1.75" strokeLinecap="round"/>
        <line x1="9" y1="21" x2="14" y2="21" stroke="#7C5CFC" strokeWidth="1.75" strokeLinecap="round"/>
        <circle cx="22" cy="5" r="5" fill="#7C5CFC"/>
        <path d="M20 5 L22 7 L25 3" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Know your people",
    desc: "RECALL learns each voice. Name a speaker once and they're recognized in every future recording automatically. Navigate your entire journal by person, not just by date.",
    color: styles.cardYellow,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="10" r="5" fill="#F5C842"/>
        <circle cx="20" cy="10" r="5" fill="#FFD580"/>
        <path d="M2 26c0-4.4 3.6-8 8-8" stroke="#F5C842" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 18c4.4 0 8 3.6 8 8" stroke="#FFD580" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 18c0 0 1-1 5-1s5 1 5 1" stroke="#F5C842" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Search your entire memory",
    desc: "Ask anything in plain language. \"What did Dr. Kumar say about my dosage?\" \"What advice did my mentor give?\" RECALL finds the exact moment, highlighted in context.",
    color: styles.cardGreen,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="12" cy="12" r="8" stroke="#16A34A" strokeWidth="2"/>
        <line x1="18.5" y1="18.5" x2="25" y2="25" stroke="#16A34A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 12h6M12 9v6" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  }
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.center}>
        <div className={styles.label}>✦ Features</div>
        <h2 className={styles.title}>Everything your memory<br />wishes it had</h2>
        <p className={styles.sub}>Built around your life, not your meetings.</p>
      </div>
      <div className={styles.grid}>
        {features.map((feat, index) => (
          <div key={index} className={`${styles.card} ${feat.color}`}>
            <div className={styles.icon}>{feat.icon}</div>
            <h3 className={styles.cardTitle}>{feat.title}</h3>
            <p className={styles.cardDesc}>{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
