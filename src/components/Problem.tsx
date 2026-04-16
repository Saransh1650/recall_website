import styles from './Problem.module.css';

const tags = [
  "😰 Anxiety & overwhelm",
  "🧠 ADHD & focus challenges",
  "👨‍⚕️ Doctor appointments",
  "🎓 Academic mentoring",
  "❤️ Family conversations",
  "💼 Networking calls",
  "🛋️ Therapy sessions",
];

export default function Problem() {
  return (
    <div className={styles.problem}>
      <div className={styles.inner}>
        <h2>Your mind was elsewhere.<br />The words are gone.</h2>
        <p>
          We&apos;ve all been there — nodding through an important conversation, 
          caught in our own thoughts, only to leave with a sinking feeling that 
          we missed something crucial. RECALL was built for those moments.
        </p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
