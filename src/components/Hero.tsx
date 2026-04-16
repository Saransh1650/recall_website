import styles from './Hero.module.css';
import WaitlistForm from './WaitlistForm';


export default function Hero() {
  return (
    <section id="waitlist">
      <div className={styles.hero}>
        <div>
          <div className={styles.eyebrow}>
            <span className={styles.pulseDot}></span> Now in Early Access
          </div>
          <h1 className={styles.title}>
            Be present.<br />
            We&apos;ll <span className={styles.underlineYellow}>remember.</span>
          </h1>
          <p className={styles.sub}>
            RECALL listens to your conversations and turns them into beautiful journal entries — 
            so you can stop worrying about forgetting and start actually being there.
          </p>
          <div className={styles.ctas}>
            <WaitlistForm />
          </div>

          <div className={styles.trust}>
            <div className={styles.trustAvatars}>
              <div className={styles.ta} style={{ background: '#FFB3A3' }}></div>
              <div className={styles.ta} style={{ background: '#A3D9FF' }}></div>
              <div className={styles.ta} style={{ background: '#B3FFD1' }}></div>
              <div className={styles.ta} style={{ background: '#FFD9A3' }}></div>
              <div className={styles.ta} style={{ background: '#D9B3FF' }}></div>
            </div>
            <p><strong>2,400+ people</strong> on the waitlist</p>
          </div>
        </div>

        {/* HERO ILLUSTRATION */}
        <div className={styles.visual}>
          <svg width="500" height="540" viewBox="0 0 500 540" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="250" cy="290" rx="190" ry="165" fill="#F0EEFF" opacity="0.55" />
            <ellipse cx="310" cy="200" rx="90" ry="80" fill="#FFF3EB" opacity="0.6" />

            {/* Left speech bubble */}
            <g className="f1">
              <rect x="28" y="115" width="136" height="68" rx="16" fill="white" stroke="#E8E2D9" strokeWidth="1.5" />
              <rect x="46" y="136" width="100" height="9" rx="4.5" fill="#E8E2D9" />
              <rect x="46" y="152" width="72" height="9" rx="4.5" fill="#E8E2D9" />
              <path d="M60 183 L48 200 L80 183" fill="white" stroke="#E8E2D9" strokeWidth="1.5" strokeLinejoin="round" />
            </g>

            {/* Right speech bubble */}
            <g className="f2">
              <rect x="336" y="90" width="136" height="68" rx="16" fill="#FFF3EB" />
              <rect x="352" y="111" width="104" height="9" rx="4.5" fill="#FFD0B0" />
              <rect x="352" y="127" width="76" height="9" rx="4.5" fill="#FFD0B0" />
              <path d="M400 158 L380 175 L420 158" fill="#FFF3EB" />
            </g>

            <rect x="172" y="68" width="156" height="300" rx="30" fill="#1C1917" />
            <rect x="180" y="82" width="140" height="272" rx="20" fill="#2A2018" />
            <rect x="218" y="82" width="64" height="20" rx="10" fill="#1C1917" />

            <rect x="184" y="108" width="132" height="240" rx="12" fill="#2A2018" />
            <rect x="184" y="108" width="132" height="40" rx="12" fill="#332A1F" />
            <rect x="184" y="132" width="132" height="16" fill="#332A1F" />
            <circle cx="198" cy="128" r="7" fill="rgba(255,255,255,0.07)" />
            <path d="M196 128 L200 125 M196 128 L200 131" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" />
            <rect x="211" y="124" width="60" height="8" rx="4" fill="rgba(255,255,255,0.12)" />

            <rect x="192" y="156" width="50" height="7" rx="3.5" fill="rgba(255,255,255,0.1)" />
            <rect x="250" y="153" width="36" height="13" rx="6.5" fill="rgba(240,106,46,0.25)" />
            <circle cx="258" cy="159.5" r="4" fill="#F06A2E" opacity="0.7" />
            <rect x="264" y="157" width="16" height="5" rx="2.5" fill="#F06A2E" opacity="0.6" />
            <rect x="192" y="176" width="116" height="7" rx="3.5" fill="rgba(255,255,255,0.12)" />
            <rect x="192" y="190" width="100" height="7" rx="3.5" fill="rgba(255,255,255,0.09)" />
            <rect x="192" y="204" width="110" height="7" rx="3.5" fill="rgba(255,255,255,0.12)" />
            <rect x="192" y="218" width="84" height="7" rx="3.5" fill="rgba(255,255,255,0.09)" />
            <rect x="192" y="232" width="116" height="1" fill="rgba(255,255,255,0.06)" />
            <rect x="192" y="240" width="56" height="6" rx="3" fill="rgba(240,106,46,0.4)" />
            <rect x="192" y="253" width="108" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
            <rect x="192" y="265" width="90" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
            <rect x="192" y="277" width="100" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
            <rect x="192" y="293" width="52" height="40" rx="8" fill="rgba(124,92,252,0.2)" />
            <circle cx="218" cy="313" r="8" fill="rgba(124,92,252,0.3)" />
            <rect x="252" y="300" width="44" height="14" rx="7" fill="rgba(22,163,74,0.2)" />
            <rect x="256" y="304" width="36" height="6" rx="3" fill="rgba(22,163,74,0.5)" />
            <rect x="192" y="338" width="116" height="6" rx="3" fill="rgba(255,255,255,0.06)" />

            <rect x="225" y="358" width="50" height="4" rx="2" fill="rgba(255,255,255,0.12)" />

            <g className="f3">
              <ellipse cx="250" cy="462" rx="88" ry="11" fill="rgba(0,0,0,0.07)" />
              <rect x="162" y="415" width="176" height="108" rx="14" fill="#F5C842" />
              <rect x="162" y="415" width="22" height="108" rx="10" fill="#E8B700" />
              <rect x="190" y="423" width="138" height="92" rx="6" fill="white" opacity="0.96" />
              <rect x="203" y="438" width="110" height="6" rx="3" fill="#E8E2D9" />
              <rect x="203" y="451" width="86" height="6" rx="3" fill="#E8E2D9" />
              <rect x="203" y="464" width="100" height="6" rx="3" fill="#E8E2D9" />
              <rect x="203" y="477" width="68" height="6" rx="3" fill="#E8E2D9" />
              <path d="M312 430 L314.5 437 L321 440 L314.5 443 L312 450 L309.5 443 L303 440 L309.5 437 Z" fill="#F06A2E" opacity="0.85" />
            </g>

            <path d="M118 72 L120 78 L126 81 L120 84 L118 90 L116 84 L110 81 L116 78 Z" fill="#FFD166" />
            <path d="M404 222 L406 227 L411 229 L406 231 L404 236 L402 231 L397 229 L402 227 Z" fill="#7C5CFC" opacity="0.75" />
            <path d="M356 390 L357.5 394 L362 396 L357.5 398 L356 402 L354.5 398 L350 396 L354.5 394 Z" fill="#F06A2E" opacity="0.65" />
            <circle cx="140" cy="320" r="5" fill="#FFD166" opacity="0.5" />
            <circle cx="388" cy="320" r="4" fill="#7C5CFC" opacity="0.4" />

            <g className="f2">
              <rect x="346" y="288" width="118" height="44" rx="22" fill="white" stroke="#E8E2D9" strokeWidth="1.5" />
              <circle cx="368" cy="310" r="10" fill="#06D6A0" />
              <path d="M364 310 L367 313 L374 306" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="384" y="305" width="64" height="7" rx="3.5" fill="#E8E2D9" />
              <rect x="384" y="316" width="46" height="6" rx="3" fill="#E8E2D9" opacity="0.55" />
            </g>

            <g className="f1" style={{ animationDelay: '0.3s' }}>
              <rect x="20" y="280" width="114" height="40" rx="20" fill="white" stroke="#E8E2D9" strokeWidth="1.5" />
              <circle cx="42" cy="300" r="11" fill="#FFB3A3" />
              <circle cx="42" cy="296" r="4" fill="#F4956A" />
              <path d="M33 310 C33 306 51 306 51 310" fill="#F4956A" />
              <rect x="60" y="295" width="58" height="6" rx="3" fill="#E8E2D9" />
              <rect x="60" y="305" width="40" height="5" rx="2.5" fill="#E8E2D9" opacity="0.5" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
