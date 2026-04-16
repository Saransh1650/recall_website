import styles from './Hero.module.css';
import WaitlistForm from './WaitlistForm';

export default function Hero() {
  return (
    <section className={styles.hero} id="waitlist">
      <div className={styles.inner}>

        {/* Eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Now in Early Access
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          Stop losing the conversations<br />
          <span className={styles.grad}>that matter.</span>
        </h1>

        <p className={styles.sub}>
          RECALL turns real conversations into structured, searchable journal entries —
          automatically, in the background.
        </p>

        {/* CTA */}
        <div className={styles.ctaWrap}>
          <WaitlistForm />
        </div>

        {/* Trust */}
        <div className={styles.trust}>
          <div className={styles.avatars}>
            {['#FFB3A3','#A3D9FF','#B3FFD1','#FFD9A3','#D9B3FF'].map((c, i) => (
              <div key={i} className={styles.av} style={{ background: c }} />
            ))}
          </div>
          <span className={styles.trustText}><strong>2,400+</strong> people already waiting</span>
        </div>
      </div>

      {/* ── Phone Mockup ── */}
      <div className={styles.phoneWrap}>

        {/* Floating pill: One-tap recording */}
        <div className={`${styles.pill} ${styles.pillLeft}`}>
          <span className={styles.recDot} />
          One-tap recording
        </div>

        {/* Floating pill: Search */}
        <div className={`${styles.pill} ${styles.pillRight}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="5" cy="5" r="4" stroke="#7C6CF2" strokeWidth="1.5"/>
            <path d="M8.2 8.2L11 11" stroke="#7C6CF2" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Search your memory
        </div>

        <div className={styles.phone}>
          <div className={styles.notch} />
          <div className={styles.screen}>

            {/* ── Phase 1: Recording ── */}
            <div className={`${styles.phase} ${styles.phase1}`}>
              <div className={styles.recBar}>
                <span className={styles.recIndicator} />
                <span className={styles.recLabel}>Recording</span>
                <span className={styles.recTimer}>02:34</span>
              </div>
              <div className={styles.waveform}>
                {[40,70,30,90,50,80,35,65,45,85,55,40,75,30,60].map((h, i) => (
                  <span key={i} className={styles.bar} style={{
                    height: `${h}%`,
                    animationDelay: `${i * 0.08}s`
                  }} />
                ))}
              </div>
              <p className={styles.recHint}>Listening · Alex Chen speaking…</p>
            </div>

            {/* ── Phase 2: Transcript ── */}
            <div className={`${styles.phase} ${styles.phase2}`}>
              <div className={styles.transcriptHeader}>Transcript</div>
              <div className={styles.transcriptLines}>
                <div className={`${styles.tLine} ${styles.tLine1}`}>
                  <span className={styles.speaker}>Alex</span>
                  <p>&ldquo;I&apos;ll handle the launch timeline.&rdquo;</p>
                </div>
                <div className={`${styles.tLine} ${styles.tLine2}`}>
                  <span className={`${styles.speaker} ${styles.speakerYou}`}>You</span>
                  <p>&ldquo;Let&apos;s sync Thursday.&rdquo;</p>
                </div>
                <div className={`${styles.tLine} ${styles.tLine3}`}>
                  <span className={styles.speaker}>Alex</span>
                  <p>&ldquo;Sounds good — I&apos;ll send the draft.&rdquo;</p>
                </div>
              </div>
            </div>

            {/* ── Phase 3: AI Moment ── */}
            <div className={`${styles.phase} ${styles.phase3}`}>
              <div className={styles.aiMoment}>
                <div className={styles.aiSpinner} />
                <p className={styles.aiText}>✦ RECALL AI understanding…</p>
              </div>
            </div>

            {/* ── Phase 4: Journal Entry ── */}
            <div className={`${styles.phase} ${styles.phase4}`}>
              <div className={styles.journalCard}>
                <div className={styles.jAccent} />
                <div className={styles.jBody}>
                  <div className={styles.jMeta}>
                    <span>📓</span>
                    <div>
                      <strong>Conversation with Alex</strong>
                      <span> · Today, 10:42 AM</span>
                    </div>
                  </div>
                  <p className={`${styles.jLine} ${styles.jl1}`}>Alex will own the launch timeline.</p>
                  <p className={`${styles.jLine} ${styles.jl2}`}>Prefers async communication.</p>
                  <p className={`${styles.jLine} ${styles.jl3}`}>Follow up on Thursday.</p>
                  <div className={`${styles.jTags} ${styles.jTagsIn}`}>
                    <span className={styles.tag} style={{ color: '#FF7A45', background: '#FFF0E8' }}>📅 Follow up Thu</span>
                    <span className={styles.tag} style={{ color: '#7C6CF2', background: '#F0EEFF' }}>⭐ Reliable</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
