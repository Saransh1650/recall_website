import styles from './Pricing.module.css';

const plans = [
  {
    tier: "Free",
    amount: "₹0",
    period: "Forever free",
    featured: false,
    features: [
      "3 recordings / month",
      "Up to 20 min per recording",
      "Basic speaker ID (2 voices)",
      "500 MB storage",
      "5 AI questions / month",
      "Photo attachments"
    ],
    buttonText: "Get started free",
  },
  {
    tier: "Pro",
    amount: "₹299",
    period: "per month",
    featured: true,
    badge: "Most Popular",
    features: [
      "Unlimited recordings",
      "Up to 10 speaker profiles",
      "10 GB storage",
      "Unlimited AI Q&A",
      "On-device private mode",
      "Photos + Audio attachments",
      "Export to PDF / Epub",
      "Life Chapters"
    ],
    buttonText: "Start free trial",
  },
  {
    tier: "Lifetime",
    amount: "₹2,999",
    period: "one-time payment",
    featured: false,
    features: [
      "Everything in Pro",
      "50 GB storage",
      "Video attachments",
      "Pay once, use forever",
      "All future features included"
    ],
    buttonText: "Get lifetime access",
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.center}>
          <div className={styles.label}>✦ Pricing</div>
          <h2 className={styles.title}>Start free. Go unlimited.</h2>
          <p className={styles.sub}>India-first pricing built to be accessible to everyone who needs it.</p>
        </div>
        
        <div className={styles.pricing}>
          {plans.map((plan, i) => (
            <div key={i} className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
              {plan.badge && <div className={styles.badge}>{plan.badge}</div>}
              <div className={styles.tier}>{plan.tier}</div>
              <div className={styles.amount}>{plan.amount}</div>
              <div className={styles.period}>{plan.period}</div>
              <div className={styles.divider}></div>
              <ul className={styles.features}>
                {plan.features.map((feat, j) => (
                  <li key={j} className={styles.feature}>
                    <div className={styles.check}>
                      <svg width="10" height="10" viewBox="0 0 10 10">
                        <path 
                          d="M2 5L4.2 7.5L8 2.5" 
                          stroke={plan.featured ? "white" : "#16A34A"} 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              <a href="#" className={styles.btn}>{plan.buttonText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
