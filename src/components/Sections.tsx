import styles from './Sections.module.css';

/* ────────────────────────────────
   Section 2: Capture Conversations
──────────────────────────────── */
export function SectionCapture() {
  return (
    <section className={styles.section} id="capture">
      <div className={styles.grid}>
        <div className={styles.text}>
          <div className={styles.label}>01 · Capture</div>
          <h2 className={styles.h2}>One tap is<br />all it takes.</h2>
          <p className={styles.p}>
            Start recording and stay present in the conversation.
            RECALL captures everything in the background — so you
            never have to choose between listening and remembering.
          </p>
          <ul className={styles.checks}>
            <li><CheckIcon /> Works in any environment</li>
            <li><CheckIcon /> Real-time speaker detection</li>
            <li><CheckIcon /> Runs fully in the background</li>
          </ul>
        </div>
        <div className={styles.visual}>
          <div className={styles.recCard}>
            <div className={styles.recTop}>
              <div className={styles.recDotLg} />
              <span>Recording</span>
              <span className={styles.timer}>05:21</span>
            </div>
            <div className={styles.bigWave}>
              {[30,55,80,60,90,45,70,95,50,75,40,65,85,35,60,80,45].map((h, i) => (
                <span key={i} className={styles.wavebar} style={{
                  height: `${h}%`,
                  animationDelay: `${i * 0.07}s`,
                  animationDuration: `${0.7 + (i % 4) * 0.12}s`
                }} />
              ))}
            </div>
            <div className={styles.speakers}>
              <div className={styles.speakerChip}>
                <div className={styles.av} style={{ background: '#FFB3A3' }} />
                Alex Chen · speaking
              </div>
              <div className={`${styles.speakerChip} ${styles.speakerChipYou}`}>
                <div className={styles.av} style={{ background: '#D9B3FF' }} />
                You
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────
   Section 3: AI Understanding
──────────────────────────────── */
export function SectionAI() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={`${styles.grid} ${styles.gridFlip}`}>
        <div className={styles.text}>
          <div className={styles.label}>02 · Understand</div>
          <h2 className={styles.h2}>RECALL doesn&apos;t just<br />transcribe conversations.</h2>
          <p className={styles.p} style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--text)', fontWeight: 500 }}>
            It understands them.
          </p>
          <p className={styles.p}>
            Every word is analyzed for context, intent, and relationship signal —
            turning raw conversation into structured understanding.
          </p>
        </div>
        <div className={styles.visual}>
          <div className={styles.aiCard}>
            <div className={styles.transcriptHdr}>Transcript</div>
            <div className={styles.bubbles}>
              <div className={styles.tbubble}>
                <span className={styles.tname}>Alex</span>
                <p>&ldquo;I&apos;ll handle the launch timeline.&rdquo;</p>
              </div>
              <div className={`${styles.tbubble} ${styles.tbubbleYou}`}>
                <span className={`${styles.tname} ${styles.tnameYou}`}>You</span>
                <p>&ldquo;Let&apos;s sync Thursday.&rdquo;</p>
              </div>
              <div className={styles.tbubble}>
                <span className={styles.tname}>Alex</span>
                <p>&ldquo;I&apos;ll send the draft by Wednesday.&rdquo;</p>
              </div>
            </div>
            {/* Transform arrow */}
            <div className={styles.transformRow}>
              <div className={styles.tLine} />
              <span className={styles.tLabel}>✦ AI understanding</span>
              <div className={styles.tLine} />
            </div>
            {/* Insights */}
            <div className={styles.insights}>
              <div className={styles.insight}><span>🎯</span> Action item identified</div>
              <div className={styles.insight}><span>👤</span> Speaker intent mapped</div>
              <div className={styles.insight}><span>📅</span> Follow-up detected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────
   Section 4: Journal Entries
──────────────────────────────── */
export function SectionJournal() {
  return (
    <section className={styles.section}>
      <div className={styles.centered}>
        <div className={styles.label}>03 · Remember</div>
        <h2 className={styles.h2Center}>
          Every conversation becomes a<br />clean, structured journal entry.
        </h2>
        <p className={`${styles.p} ${styles.pCenter}`}>
          Not a transcript. A beautiful, organized memory you can actually use.
        </p>
      </div>

      <div className={styles.journalShowcase}>
        <div className={styles.journalFull}>
          <div className={styles.jfAccent} />
          <div className={styles.jfBody}>
            <div className={styles.jfHeader}>
              <div>
                <h3 className={styles.jfTitle}>Conversation with Alex</h3>
                <span className={styles.jfDate}>Today · 10:42 AM · 12 min</span>
              </div>
              <div className={styles.jfAvatar} />
            </div>
            <div className={styles.jfDivider} />
            <p className={styles.jfLine}>Alex will own the launch timeline. Prefers to communicate async over Slack, not email.</p>
            <p className={styles.jfLine}>Agreed to send a draft by Wednesday. Follow up Thursday to confirm.</p>
            <p className={styles.jfLine}>Alex seems methodical and thorough — reliable on delivery promises.</p>
            <div className={styles.jfTagRow}>
              <span className={`${styles.jfTag} ${styles.tagOrange}`}>📅 Follow up Thu</span>
              <span className={`${styles.jfTag} ${styles.tagPurple}`}>⭐ Reliable</span>
              <span className={`${styles.jfTag} ${styles.tagGreen}`}>✓ Action item</span>
              <span className={`${styles.jfTag} ${styles.tagBlue}`}>👤 Alex</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────
   Section 5: Know Your People
──────────────────────────────── */
export function SectionPeople() {
  const people = [
    { name: 'Alex Chen', role: 'Work · Colleague', bg: '#FFB3A3', convos: 12 },
    { name: 'Dr. Kumar', role: 'Health · Doctor', bg: '#A3D9FF', convos: 5 },
    { name: 'Priya', role: 'Personal · Friend', bg: '#B3FFD1', convos: 8 },
    { name: 'Mentor Rahul', role: 'Career · Mentor', bg: '#D9B3FF', convos: 19 },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.grid}>
        <div className={styles.visual}>
          <div className={styles.peopleCard}>
            <div className={styles.peopleHdr}>Your people</div>
            <div className={styles.peopleList}>
              {people.map((p, i) => (
                <div key={i} className={styles.personRow}>
                  <div className={styles.personAv} style={{ background: p.bg }} />
                  <div className={styles.personInfo}>
                    <span className={styles.personName}>{p.name}</span>
                    <span className={styles.personRole}>{p.role}</span>
                  </div>
                  <span className={styles.personConvos}>{p.convos} memories</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.label}>04 · Relationships</div>
          <h2 className={styles.h2}>RECALL learns voices and<br />organizes memories around the people in your life.</h2>
          <p className={styles.p}>
            Over time, RECALL builds a rich picture of your relationships —
            who said what, when, and how they follow through.
          </p>
          <ul className={styles.checks}>
            <li><CheckIcon /> Automatic speaker identification</li>
            <li><CheckIcon /> Conversation history per person</li>
            <li><CheckIcon /> Pattern detection over time</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────
   Section 6: Search Memory
──────────────────────────────── */
export function SectionSearch() {
  return (
    <section className={styles.section}>
      <div className={styles.centered}>
        <div className={styles.label}>05 · Recall</div>
        <h2 className={styles.h2Center}>Search your entire<br />memory in plain language.</h2>
        <p className={`${styles.p} ${styles.pCenter}`}>
          Ask anything about your conversations. Get the exact moment back.
        </p>
      </div>
      <div className={styles.searchShowcase}>
        <div className={styles.searchCard}>
          <div className={styles.searchBar}>
            <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="#6B6260" strokeWidth="1.5"/>
              <path d="M11 11L14.5 14.5" stroke="#6B6260" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className={styles.searchQuery}>What did Alex say about the launch timeline?</span>
            <span className={styles.searchCursor} />
          </div>
          <div className={styles.searchDivider} />
          <div className={styles.searchResults}>
            <div className={styles.resultMeta}>1 result · Conversation with Alex · Today</div>
            <div className={styles.resultCard}>
              <div className={styles.resultAccent} />
              <div className={styles.resultBody}>
                <p className={styles.resultText}>
                  &ldquo;<mark className={styles.highlight}>I&apos;ll handle the launch timeline</mark> — I&apos;ll send the draft by Wednesday.&rdquo;
                </p>
                <span className={styles.resultSpeaker}>Alex Chen · 10:42 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── shared helper ── */
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.2" />
      <path d="M5 8.5L7 10.5L11 6" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
