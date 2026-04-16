import styles from './CTA.module.css';
import WaitlistForm from './WaitlistForm';


export default function CTA() {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>✦ Get started</div>
        <h2 className={styles.title}>Stop losing the conversations<br />that matter most</h2>
        <p className={styles.sub}>Join 2,400+ people who never want to leave a conversation wishing they&apos;d paid more attention.</p>
          <div className={styles.btns}>
            <WaitlistForm />
          </div>

      </div>
    </div>
  );
}
