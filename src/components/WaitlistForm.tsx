'use client';
import { useState } from 'react';
import styles from './WaitlistForm.module.css';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  if (done) {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon}>✓</span>
        <span>You&apos;re on the list! We&apos;ll be in touch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.btn}>
        Join Waitlist
      </button>
    </form>
  );
}
