import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    desc: 'Get started and see the magic.',
    features: ['30 min recording / month', '10 journal entries', 'Basic search', '7-day history'],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹299',
    period: '/month',
    desc: 'For people who live in conversations.',
    features: ['Unlimited recording', 'Unlimited journal entries', 'Advanced search', 'Speaker identification', 'People profiles', 'Export to Notion'],
    cta: 'Join waitlist',
    highlight: true,
  },
  {
    name: 'Lifetime',
    price: '₹2,999',
    period: 'one time',
    desc: 'Own it forever. No subscriptions.',
    features: ['Everything in Pro', 'Lifetime updates', 'Priority support', 'Early access to new features'],
    cta: 'Join waitlist',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Simple pricing</div>
          <h2 className={styles.h2}>Start free. Remember forever.</h2>
          <p className={styles.sub}>No hidden fees. Cancel anytime.</p>
        </div>
        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <div key={i} className={`${styles.card} ${plan.highlight ? styles.featured : ''}`}>
              {plan.highlight && <div className={styles.badge}>Most popular</div>}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              <p className={styles.planDesc}>{plan.desc}</p>
              <div className={styles.divider} />
              <ul className={styles.features}>
                {plan.features.map((f, j) => (
                  <li key={j} className={styles.feature}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6.5" fill={plan.highlight ? "rgba(255,255,255,0.15)" : "rgba(34,197,94,0.12)"} />
                      <path d="M4 7.5L6 9.5L10 5.5" stroke={plan.highlight ? "white" : "#22C55E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className={`${styles.btn} ${plan.highlight ? styles.btnFeatured : ''}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
