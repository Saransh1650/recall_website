'use client';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import styles from './WaitlistForm.module.css';
import { addToWaitlist } from '@/lib/waitlist';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError('');
    try {
      await addToWaitlist(email);
      setDone(true);
    } catch (err) {
      setError('Failed to join waitlist. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className={styles.success}>
        <CheckCircle2 size={20} className={styles.successIcon} />
        <span>You&apos;re on the list! We&apos;ll be in touch.</span>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={submit} className={styles.form}>
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={styles.input}
          disabled={loading}
        />
        <button type="submit" className={styles.btn} disabled={loading}>
          {loading ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
}
