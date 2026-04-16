import styles from './Marquee.module.css';

const items = [
  "One-tap recording",
  "AI speaker identification",
  "Beautiful journal entries",
  "On-device private mode",
  "People-centric timelines",
  "Semantic search",
  "40+ languages",
  "iOS & Android",
  "Life-first journaling",
  "Voice fingerprinting",
];

export default function Marquee() {
  const displayItems = [...items, ...items]; // Duplicate for seamless loop

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {displayItems.map((item, index) => (
          <span key={index} className={styles.item}>
            <span className={styles.dot}></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
