import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.sectionFull}>
      <div className={styles.inner}>
        <div className={styles.center}>
          <div className={styles.label}>✦ How it works</div>
          <h2 className={styles.title}>Simple as 1, 2, done.</h2>
          <p className={styles.sub}>No setup, no complicated workflows. Three steps from conversation to journal.</p>
        </div>
        
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNum}>1</div>
            <div className={styles.stepArt}>
              <svg viewBox="0 0 110 110" fill="none">
                <circle cx="55" cy="55" r="50" fill="#FFF3EB" />
                <rect x="30" y="18" width="50" height="82" rx="14" fill="#1C1917" />
                <rect x="36" y="28" width="38" height="64" rx="8" fill="#2A2018" />
                <circle cx="55" cy="72" r="12" fill="rgba(240,106,46,0.2)" />
                <circle cx="55" cy="72" r="8" fill="#F06A2E" />
                <circle cx="55" cy="72" r="3.5" fill="white" />
                <rect x="40" y="48" width="4" height="12" rx="2" fill="rgba(255,255,255,0.2)" />
                <rect x="47" y="43" width="4" height="22" rx="2" fill="rgba(255,255,255,0.3)" />
                <rect x="59" y="43" width="4" height="22" rx="2" fill="rgba(255,255,255,0.3)" />
                <rect x="66" y="48" width="4" height="12" rx="2" fill="rgba(255,255,255,0.2)" />
                <circle cx="80" cy="88" r="10" fill="#FFD166" opacity="0.9" />
                <text x="80" y="93" textAnchor="middle" fontSize="12">👆</text>
              </svg>
            </div>
            <h3 className={styles.stepTitle}>Tap once to start</h3>
            <p className={styles.stepDesc}>One tap is all it takes. RECALL records quietly in the background while you stay present in the conversation.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNum}>2</div>
            <div className={styles.stepArt}>
              <svg viewBox="0 0 110 110" fill="none">
                <circle cx="55" cy="55" r="50" fill="#F0EEFF" />
                <rect x="12" y="48" width="5" height="14" rx="2.5" fill="#7C5CFC" opacity="0.4" />
                <rect x="20" y="40" width="5" height="30" rx="2.5" fill="#7C5CFC" opacity="0.55" />
                <rect x="28" y="44" width="5" height="22" rx="2.5" fill="#7C5CFC" opacity="0.7" />
                <path d="M38 55 L50 55" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" />
                <path d="M46 51 L50 55 L46 59" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="55" y="28" width="44" height="54" rx="8" fill="#FFF3EB" stroke="#FFD0B0" strokeWidth="1.5" />
                <rect x="63" y="40" width="28" height="5" rx="2.5" fill="#FFD0B0" />
                <rect x="63" y="51" width="22" height="5" rx="2.5" fill="#FFD0B0" />
                <rect x="63" y="62" width="26" height="5" rx="2.5" fill="#FFD0B0" />
                <path d="M88 20 L89.5 25 L94 27 L89.5 29 L88 34 L86.5 29 L82 27 L86.5 25 Z" fill="#F5C842" />
                <path d="M18 26 L19.2 29.5 L23 31 L19.2 32.5 L18 36 L16.8 32.5 L13 31 L16.8 29.5 Z" fill="#7C5CFC" opacity="0.7" />
              </svg>
            </div>
            <h3 className={styles.stepTitle}>AI does the magic</h3>
            <p className={styles.stepDesc}>In under 60 seconds, RECALL transcribes, identifies each speaker, and writes a structured journal entry — completely automatically.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNum}>3</div>
            <div className={styles.stepArt}>
              <svg viewBox="0 0 110 110" fill="none">
                <circle cx="55" cy="55" r="50" fill="#ECFDF5" />
                <rect x="14" y="28" width="38" height="54" rx="6" fill="#FFD166" />
                <rect x="58" y="28" width="38" height="54" rx="6" fill="#FFF3EB" />
                <rect x="48" y="28" width="14" height="54" rx="4" fill="#F5C842" />
                <rect x="21" y="42" width="24" height="4.5" rx="2.25" fill="white" opacity="0.65" />
                <rect x="21" y="53" width="18" height="4.5" rx="2.25" fill="white" opacity="0.65" />
                <rect x="21" y="64" width="22" height="4.5" rx="2.25" fill="white" opacity="0.65" />
                <rect x="65" y="42" width="24" height="4.5" rx="2.25" fill="#FFD0B0" />
                <rect x="65" y="53" width="18" height="4.5" rx="2.25" fill="#FFD0B0" />
                <rect x="65" y="64" width="22" height="4.5" rx="2.25" fill="#FFD0B0" />
                <path d="M35 32 C35 30 37 28 39 30 C41 28 43 30 43 32 C43 36 39 39 39 39 C39 39 35 36 35 32Z" fill="#F06A2E" opacity="0.75" />
                <circle cx="84" cy="84" r="12" fill="#16A34A" />
                <path d="M79 84 L82.5 87.5 L89 80" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.stepTitle}>Revisit & reflect</h3>
            <p className={styles.stepDesc}>Your journal is waiting. Read, edit, attach photos, search by person or topic, and relive any conversation exactly as it happened.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
