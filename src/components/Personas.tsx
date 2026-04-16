import styles from './Personas.module.css';

const personas = [
  {
    role: "The Drifter",
    name: "Aryan, 26",
    quote: "I zone out halfway through important conversations and feel guilty about it. RECALL is like having a perfect memory for the moments my brain checked out.",
    color: "#FFE0C8",
    avatarColor: "#F4A96A"
  },
  {
    role: "The Caregiver",
    name: "Priya, 42",
    quote: "Managing my father's health means so many appointments. RECALL lets me search 'medication dosage' and find exactly what the doctor said six months ago.",
    color: "#D9F0E8",
    avatarColor: "#6ABFA0"
  },
  {
    role: "The Student",
    name: "Sneha, 21",
    quote: "I tag each friend's voice in our study group. Before exams, I scroll back through everything we discussed. It's like notes that actually make sense.",
    color: "#E8E4FF",
    avatarColor: "#8B7FF5"
  },
  {
    role: "The Reflector",
    name: "Rahul, 35",
    quote: "I've always wanted a rich life journal but found writing tedious. RECALL builds it automatically. My therapy insights are finally somewhere I can actually find them.",
    color: "#FFF0C8",
    avatarColor: "#F5C842"
  }
];

export default function Personas() {
  return (
    <section className={styles.section}>
      <div className={styles.center}>
        <div className={styles.label}>✦ Who it&apos;s for</div>
        <h2 className={styles.title}>Built for real moments,<br />not boardrooms</h2>
        <p className={styles.sub}>RECALL is for anyone whose mind has ever drifted during a conversation that mattered.</p>
      </div>
      <div className={styles.personas}>
        {personas.map((p, i) => (
          <div key={i} className={styles.persona}>
            <svg className={styles.avatar} viewBox="0 0 56 56" fill="none">
              <circle cx="28" cy="28" r="28" fill={p.color}/>
              <circle cx="28" cy="22" r="9" fill={p.avatarColor}/>
              <path d="M12 52 C12 40 44 40 44 52" fill={p.avatarColor}/>
            </svg>
            <div className={styles.role}>{p.role}</div>
            <div className={styles.name}>{p.name}</div>
            <p className={styles.quote}>&quot;{p.quote}&quot;</p>
          </div>
        ))}
      </div>
    </section>
  );
}
