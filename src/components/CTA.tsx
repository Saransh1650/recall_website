import styles from './CTA.module.css';
import WaitlistForm from './WaitlistForm';

export default function CTA() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.inner}>
        <h2 className={styles.h2}>
          Start remembering<br />every conversation.
        </h2>
        <p className={styles.sub}>
          Join the early access waitlist. Be the first to experience RECALL.
        </p>
        <div className={styles.formWrap}>
          <WaitlistForm />
        </div>
        <div className={styles.trust}>
          <div className={styles.avatars}>
            {['#FFB3A3','#A3D9FF','#B3FFD1','#FFD9A3','#D9B3FF'].map((c, i) => (
              <div key={i} className={styles.av} style={{ background: c }} />
            ))}
          </div>
          <span><strong>2,400+ people</strong> already waiting</span>
        </div>
      </div>
    </section>
  );
}
